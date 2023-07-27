import { env } from "@/env/client.mjs";
import { BlogProps } from "@/pages"
import { fetchData } from "@/utils/api";
import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { BlogPost } from "../BlogPost";

interface showLatestProps {
    initialBlogPosts: BlogProps[];
}

export const ShowLatest = ({initialBlogPosts}: showLatestProps) => {
    const [blogPosts, setBlogPosts] = useState(initialBlogPosts)
    const [loadedPosts, setLoadedPosts] = useState(8)
    const blogPostsContainerRef = useRef<HTMLDivElement>(null)

    const fetchMorePosts = async () => {
        
        const response = await fetchData(`${env.NEXT_PUBLIC_URL_ENDPOINT}/posts?page=1&perPage=${loadedPosts}`)
        const newPosts = response.data

        setBlogPosts((prevBlogPosts) => [...prevBlogPosts.slice(loadedPosts), ...newPosts])
    }

    const handleLoadMore = () => {
        setLoadedPosts((prevLoadedPosts) => prevLoadedPosts + 4 )
        fetchMorePosts()
    }

    useEffect(() => {
        if (blogPostsContainerRef.current) {
            
            blogPostsContainerRef.current.scrollTop = blogPostsContainerRef.current.scrollHeight
        }
    }, [blogPosts])
    
    return (
        <>
            <Box overflow='scroll' ref={blogPostsContainerRef} scrollBehavior='smooth'>
                <Grid gap={6} gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))" px={6} pb={6}>
                {blogPosts.map(post => (
                    <BlogPost key={post.created_at} blogPost={post} />
                ))}
                </Grid>
            </Box>
            <Flex mt='auto' justifyContent='center' px={6} pb={6}>
                <Button fontSize='sm' w='fit-content' mt={6} onClick={handleLoadMore}>Laad meer</Button>
            </Flex>
        </>
    )
}