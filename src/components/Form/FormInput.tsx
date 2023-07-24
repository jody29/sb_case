import { Box, Flex, FormLabel, Input, Stack } from "@chakra-ui/react"

interface formInputProps {
    label: string;
    name: string;
}

export const FormInput = (props: formInputProps) => {
    return (
        <>
            <FormLabel htmlFor={props.name} fontSize='sm' color='grey.700' mb={0}>{props.label}</FormLabel>
            <Input w='100%' bg='white.darker' border={0} fontSize='sm' placeholder='Geen titel' _placeholder={{ color: 'grey', fontStyle: 'italic' }}/>
        </>
    )
}