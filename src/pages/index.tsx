import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { NextSeo } from 'next-seo'
import { Footer } from '@/components/layout/Footer'
import { Container, Heading } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NextSeo title='Home' description='Homepage of social brothers blog' />
      <Container>
        <Heading fontSize='lg'>Blog</Heading>
      </Container>
      <Footer />
    </>
  )
}
