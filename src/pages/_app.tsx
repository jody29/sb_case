import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo' 
import { AppProps } from 'next/app'

import { theme } from '@/theme'

const App = ({ Component: Page, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo titleTemplate={`%s | Social Brothers`} />
      <ChakraProvider theme={theme}>
        <Page {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
