import { NextSeo } from 'next-seo'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Box, Container, Flex } from '@chakra-ui/react'
import { Form } from '@/components/Form'

export default function Home() {
  return (
    <>
      <NextSeo title='Home' description='Homepage of social brothers blog' />
      <Header />
      <Box as='main' w='full' py={16}>
        <Container>
          <Flex gap={8} flexWrap='wrap' alignItems='stretch'>
            <Flex flex={1} backgroundColor='white' p={12}>
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
