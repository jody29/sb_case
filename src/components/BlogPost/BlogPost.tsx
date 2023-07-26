import { env } from "@/env/client.mjs"
import { BlogProps } from "@/pages"
import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"

interface blogPostProps {
    blogPost: BlogProps
}

export const BlogPost = ({ blogPost }: blogPostProps) => {
    const HOST_ENDPOINT = env.NEXT_PUBLIC_HOST_ENDPOINT

    return (
        <Box boxShadow='0 0 10px rgba(0,0,0,0.1)' h='stretch'>
            <Box px={4} pt={14} pb={2} position='relative'>
                <Flex zIndex={2}>
                    <Text>{blogPost.created_at}</Text>
                    <Text>{blogPost.category.name}</Text>
                </Flex>
                <Image src={`${HOST_ENDPOINT}/storage/${blogPost.img_url}`} zIndex={0} loading='lazy' objectFit='cover' position='absolute' top={0} left={0} h='full' w='full' />
            </Box>
            <Stack bg='white' p={4}>
                <Heading as='h3' fontSize='lg' fontWeight='bold' >{blogPost.title}</Heading>
                <Text color='grey.200'>{blogPost.content}</Text>
            </Stack>
        </Box>
    )
}