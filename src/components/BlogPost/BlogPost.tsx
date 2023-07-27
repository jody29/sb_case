import { env } from "@/env/client.mjs"
import { BlogProps } from "@/pages"
import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"

interface blogPostProps {
    blogPost: BlogProps
}

export const BlogPost = ({ blogPost }: blogPostProps) => {
    const HOST_ENDPOINT = env.NEXT_PUBLIC_HOST_ENDPOINT

    const date = new Date(blogPost.created_at)
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = date.getFullYear()

    const formatDate = `${day}-${month}-${year}`

    return (
        <Box boxShadow='0 0 10px rgba(0,0,0,0.1)' h='stretch' minH='217px' overflow='hidden'>
            <Box position='relative'>
                <Image src={`${HOST_ENDPOINT}/storage/${blogPost.img_url}`} alt={blogPost.title} loading='lazy' objectFit='cover' zIndex={0} w='full' h='72px'/>
                <Flex zIndex={1} fontSize='xs' color='white' fontStyle='italic' justifyContent='space-between' position='absolute' bottom={0} right={0} left={0} pb={2} px={4}>
                    <Text>{formatDate}</Text>
                    <Text>{blogPost.category.name}</Text>
                </Flex>
            </Box>
            <Stack bg='white' p={4} height='full'>
                <Heading as='h3' fontSize='lg' fontWeight='bold' >{blogPost.title}</Heading>
                <Text color='grey.200'>{blogPost.content}</Text>
            </Stack>
        </Box>
    )
}