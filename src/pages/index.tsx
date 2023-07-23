import { Inter } from 'next/font/google'
import { NextSeo } from 'next-seo'
import { Footer } from '@/components/layout/Footer'
import { Container, Heading } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NextSeo title='Home' description='Homepage of social brothers blog' />
      <Container>
        <Heading as='h2' size='lg' fontWeight='bold'>Blog</Heading>
      </Container>
      <Footer />
    </>
  )
}
