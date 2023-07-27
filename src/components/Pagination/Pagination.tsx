import { Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    nextPageUrl?: string;
    prevPageUrl?: string;
}

export const Pagination = ({ currentPage, totalPages, prevPageUrl, nextPageUrl }: PaginationProps) => {
    const parsedCurrentPage = parseInt(currentPage.toString(), 10);

    const shouldRenderPage = (pageNumber: number) => {
        if (totalPages <= 5) {
            return true;
        };

        if (pageNumber <= 2 || pageNumber >= totalPages - 1) {
            return true;
        };

        if (
            parsedCurrentPage <= 4 && pageNumber <= 5 ||
            parsedCurrentPage >= totalPages - 3 && pageNumber >= totalPages - 4 ||
            pageNumber >= parsedCurrentPage - 1 && pageNumber <= parsedCurrentPage + 1
        ) {
            return true
        }

        return false
    }

    const extractPageNumber = (url: string) => {
        if (url) {
            const pageNumberMatch = url.match(/page=(\d+)/);
            if (pageNumberMatch && pageNumberMatch.length >= 2) {
                return parseInt(pageNumberMatch[1], 10)
            }
        }
    }

    const prevPageNumber = prevPageUrl && extractPageNumber(prevPageUrl);
    const nexPageNumber = nextPageUrl && extractPageNumber(nextPageUrl)

    return (
        <Flex justifyContent='center' alignItems='center'>
            {prevPageUrl && (
                <NextLink href={`/blog?page=${prevPageNumber}&perPage=8`}>
                    <Flex color='orange.light' alignItems='center' gap={2} mr={3}>
                        <FiArrowLeft />
                        <Text>Vorige pagina</Text>
                    </Flex>
                </NextLink>
            )}

            {[...Array(totalPages)].map((_, i) => {
                const pageNumber = i + 1;

                const renderPage = (page: number, label: string) => (
                    <NextLink key={page} href={`blog?page=${page}&perPage=8`} >
                        <Flex px={3} py={1} backgroundColor={page === parsedCurrentPage ? "#e7e7e7" : "transparent"} borderRadius="full">
                            <Text>{label}</Text>
                        </Flex>
                    </NextLink>
                )

                if (shouldRenderPage(pageNumber)) {
                    return renderPage(pageNumber, pageNumber.toString());
                  } else if (
                    (pageNumber === parsedCurrentPage - 2 && parsedCurrentPage > 3 && totalPages > 7) ||
                    (pageNumber === parsedCurrentPage + 3 && parsedCurrentPage < totalPages - 5 && totalPages > 7)
                  ) {
                    return <Text key={pageNumber} mx={1}>...</Text>;
                  } else if ((parsedCurrentPage <= 3 && pageNumber === 5) || (parsedCurrentPage < 4 && pageNumber === 6)) {
                    return <Text key={pageNumber} mx={1}>...</Text>;
                  } else if ((parsedCurrentPage >= totalPages - 6 && pageNumber === totalPages - 4) || (parsedCurrentPage >= totalPages - 3 && pageNumber === totalPages - 5)) {
                    return <Text key={pageNumber} mx={1}>...</Text>;
                  } else if (pageNumber === 1) {
                    return renderPage(pageNumber, "...");
                  } else if (pageNumber === totalPages) {
                    return renderPage(pageNumber, "...");
                  }
                
                return null;
            })}

            {nextPageUrl && (
                <NextLink href={`/blog?page=${nexPageNumber}&perPage=8`}>
                    <Flex alignItems='center' color='orange.light' gap={2} ml={3}>
                        <Text>Volgende Pagina</Text>
                        <FiArrowRight />
                    </Flex>
                </NextLink>
            )}
        </Flex>
    )
}