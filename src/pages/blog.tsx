import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PostsContainer } from "@/components/PostsContainer";
import { env } from "@/env/client.mjs";
import { fetchData } from "@/utils/api";
import { Box, Container } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { BlogProps } from ".";

interface PageProps {
    data: BlogProps[];
    totalPages: number;
    page: number;
    nextPage?: string;
    prevPage?: string;
}

const Page: NextPage<PageProps> = ({data, totalPages, page, nextPage, prevPage}) => {
    return (
        <>
            <NextSeo title="Blog" description="Page with all the blogs" />
            <Header headerText="Blog" />
            <Box as="main" w='full' py={16}>
                <Container>
                    <PostsContainer blogPosts={data} pageCount={totalPages} currentPage={page ? page : 1} nextPage={nextPage} prevPage={prevPage} />
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async context => {
    const { query } = context
    let { page = "1" } = query

    const perPage = 8;
    const currentPage = parseInt(page.toString(), 10)

    const totalCountResponse = await fetchData(`${env.NEXT_PUBLIC_URL_ENDPOINT}/posts`);
    const totalCount = totalCountResponse.total;

    const totalPages = Math.ceil(totalCount / perPage)

    if (currentPage < 1) {
        page = '1';
    } else if (currentPage > totalPages) {
        page = totalPages.toString()
    }

    const response = await fetchData(`${env.NEXT_PUBLIC_URL_ENDPOINT}/posts?page=${page}&perPage=${perPage}`)

    const data = response.data
    const nextPage = currentPage < totalPages ? (currentPage + 1).toString() : null;
    const prevPage = currentPage > 1 ? (currentPage - 1).toString() : null;

    return {
        props: {
            data,
            totalPages,
            page: currentPage,
            nextPage,
            prevPage,
        }
    }
}


export default Page