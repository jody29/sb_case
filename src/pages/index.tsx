import { NextSeo } from 'next-seo'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Box, Container, Flex } from '@chakra-ui/react'
import { Form } from '@/components/Form'
import { GetStaticProps, NextPage } from 'next'
import { fetchData } from '@/utils/api'
import { env } from '@/env/client.mjs'
import { ShowLatest } from '@/components/ShowLatest'

export interface BlogProps {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  content: string;
  category_id: number;
  img_url: string;
  category: {
    id: number;
    name: string;
  }
}

interface PageProps {
  initialBlogposts: BlogProps[];
}

const Page: NextPage<PageProps> = ({initialBlogposts}) => {
  return (
    <>
      <NextSeo title='Home' description='Homepage of social brothers blog' />
      <Header />
      <Box as='main' w='full' py={16}>
        <Container>
          <Flex gap={8} flexDirection={{ base: 'column-reverse', md: 'row' }} w='full' alignItems='stretch'>
            <Flex w={{  base: 'full', md: '40%' }} backgroundColor='white' p={6}>
              <Form />
            </Flex>
            <Flex w={{ base: 'full', md: '60%'}} flexDirection='column' backgroundColor='white' pt={6} maxH='696px'>
              <ShowLatest initialBlogPosts={initialBlogposts} />
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const response = await fetchData(`${env.NEXT_PUBLIC_URL_ENDPOINT}/posts?page=1&perPage=4`)
  const initialBlogposts = response.data

  console.log(initialBlogposts)

  return {
    props: {
      initialBlogposts
    },
    revalidate: 10
  }
}

export default Page
