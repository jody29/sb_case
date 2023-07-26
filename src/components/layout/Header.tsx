import { SbLogo } from "@/icons/components"
import { Box, BoxProps, Container, Flex, FlexProps, Heading, Text } from "@chakra-ui/react"
import { NavLink } from "../shared/Link";
import NextLink from "next/link"
import { forwardRef } from "react";

const NavigationLink = forwardRef<any, BoxProps>((props, ref) => (
    <Flex ref={ref} sx={{ '&.active': { borderBottom: '2px solid #f27623' } }} {...props} />
))

const navItems = [
    {
        url: '/',
        title: 'Home'
    },
    {
        url: '/blog',
        title: 'Blog'
    }
]

const Navigation = ({ ...props }: FlexProps) => {
    const { ...rest } = props

    return (
        <Flex as='nav' {...rest}>
            {navItems.map(item => (
                <Box key={item.title}>
                    <NavLink href={item.url} exact={item.url === '/'} passHref>
                        <NavigationLink px={1} pb={1}>
                            <Text fontSize='md' color='white' fontWeight='semibold'>{item.title}</Text>
                        </NavigationLink>
                    </NavLink>
                </Box>
            ))}
        </Flex>
    )
}

interface headerProps {
    headerText?: string;
}

export const Header = ({ headerText }: headerProps) => {
    return (
        <Box as="header" backgroundImage='url("/images/Mask.png")' backgroundRepeat='no-repeat' backgroundSize='cover' w='100%' py={8} height='208px'>
            <Container>
                <Flex alignItems='flex-start' w='full' mb={6}>
                    <NextLink as='a' href='/'>
                        <SbLogo />
                    </NextLink>
                    <Navigation ml='auto' gap={8} />
                </Flex>
                <Heading as='h1' variant='h1' w='full' fontSize='xl' fontWeight='bold' textAlign='center'>{headerText}</Heading>
            </Container>
        </Box>
    )
}