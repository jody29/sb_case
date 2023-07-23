import { Box, Flex, Text } from "@chakra-ui/layout"

export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <Box bg='grey.900' padding={2} as='footer'>
            <Flex justifyContent='center'>
                <Text color='white' fontSize='sm'>&copy; Copyright Social Brothers - {year}</Text>
            </Flex>
        </Box>
    )
}

