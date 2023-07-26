import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Box } from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

interface PageProps {

}

const Page: NextPage<PageProps> = () => {
    return (
        <>
            <NextSeo title="Blog" description="Page with all the blogs" />
            <Header headerText="Blog" />
            <Box as="main" w='full' py={16}>

            </Box>
            <Footer />
        </>
    )
}

export const getStaticProps: GetStaticProps = async ctx => {
    return {
        props: {}
    }
}

export default Page