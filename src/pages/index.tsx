import { NextSeo } from 'next-seo'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Box, Container, Flex } from '@chakra-ui/react'
import { Form } from '@/components/Form'
import { GetStaticProps, NextPage } from 'next'
import { fetchData } from '@/utils/api'
import { env } from '@/env/client.mjs'

interface PageProps {

}

const Page: NextPage<PageProps> = () => {
  return (
    <>
      <NextSeo title='Home' description='Homepage of social brothers blog' />
      <Header />
      <Box as='main' w='full' py={16}>
        <Container>
          <Flex gap={8} flexWrap='wrap' alignItems='stretch'>
            <Flex flex={1} backgroundColor='white' p={6}>
              <Form />
            </Flex>
            <Flex flex={{ base: 1, md: 1.5 }} backgroundColor='white' p={12}></Flex>
          </Flex>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const response = await fetchData(`${env.NEXT_PUBLIC_URL_ENDPOINT}/posts?perPage=4`)

  return {
    props: {

    }
  }
}

export default Page
