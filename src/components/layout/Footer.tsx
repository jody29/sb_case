import { Box, Flex, Text } from "@chakra-ui/layout"

export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <Box bg='grey.900' padding={2}>
            <Flex justifyContent='center'>
                <Text color='white' fontSize='md'>&copy; Copyright Social Brothers - {year}</Text>
            </Flex>
        </Box>
    )
}

