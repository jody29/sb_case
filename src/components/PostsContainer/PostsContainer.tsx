import { BlogProps } from "@/pages"
import { Grid } from "@chakra-ui/react"
import { useState } from "react";
import { BlogPost } from "../BlogPost"
import { Pagination } from "../Pagination";

interface postsContainerProps {
    blogPosts: BlogProps[];
    pageCount: number;
    currentPage: number;
    nextPage?: string;
    prevPage?: string;
}

export const PostsContainer = ({blogPosts, pageCount, currentPage, prevPage, nextPage}: postsContainerProps) => {

    return (
        <>
            <Grid gridTemplateColumns='repeat(auto-fill, minmax(250px, 1fr))' gridTemplateRows='1fr 1fr' gap={6} mb={6}>
                {blogPosts.map(posts => (
                    <BlogPost key={posts.created_at} blogPost={posts} />
                ))}
            </Grid>
            <Pagination currentPage={currentPage} totalPages={pageCount} nextPageUrl={nextPage} prevPageUrl={prevPage} />
        </>
    )
}