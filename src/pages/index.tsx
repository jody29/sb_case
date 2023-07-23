import { NextSeo } from 'next-seo'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Box, Container, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <NextSeo title='Home' description='Homepage of social brothers blog' />
      <Header />
      <Box as='main' w='full' py={16}>
        <Container>
          <Heading as='h2' size='lg' fontWeight='bold'>Blog</Heading>
        </Container>
      </Box>
      <Footer />
    </>
  )
}
