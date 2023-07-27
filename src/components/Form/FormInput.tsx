import { Box, chakra, Flex, Icon, Input, Stack, Text } from "@chakra-ui/react"
import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { Label } from "../shared/Label/Label";
import { InputtWrapper } from "./FormSelect";
import { FiCamera } from 'react-icons/fi'
import { ErrorMessage } from "formik";

interface formInputProps {
    label: string;
    name: string;
    hasFocus?: boolean;
    hasError?: boolean;
    background?: string;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

export const FormInput = (props: formInputProps) => {
    return (
        <Box>
            <Label htmlFor={props.name} fontSize='sm' color='grey.700' mb={0}>{props.label}</Label>
            <InputtWrapper hasFocus={props.hasFocus} hasError={props.hasError} background='white.darker'>
                <Input w='100%' bg='white.darker' onChange={e => { props.setFieldValue(props.name, e.target.value) }} name={props.name} border={0} fontSize='sm' placeholder='Geen titel' _placeholder={{ color: 'grey', fontStyle: 'italic' }}/>
            </InputtWrapper>
        </Box>
    )
}

interface formFileInputProps {
    label?: string;
    name: string;
    image?: File;
    error?: {
        image?: string | undefined;
        content?: string | undefined;
    }
    setFieldValue: (field: string, value: any) => void
}

const CustomFileInput = (props: formFileInputProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null)
    
    const handleLabelClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    return (
        <label htmlFor={props.name} onClick={handleLabelClick} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { handleLabelClick() } }} tabIndex={0} style={{ display: 'flex', backgroundColor: '#7d7d7d', width: 'fit-content', padding: '4px 12px', color: 'white', borderRadius: '20px', fontSize: '12px', position: 'relative', overflow: 'hidden' }}>
            <Input ref={fileInputRef} type='file' accept="images/*" max="3145728" opacity={0} position='absolute' left={0} top={0} w='100%' height='100%' zIndex={-1} tabIndex={-1} cursor='pointer' name={props.name} onChange={e => { props.setFieldValue(props.name, e.currentTarget!.files![0]) }} />
            <Text>Kies bestand</Text>
        </label>
    )
}

export const FormFileInput = (props: formFileInputProps) => {
    return (
        <Box>
            <Flex>
                <Label htmlFor={props.name} fontSize='sm' color='grey.700' mb={0}>{props.label}</Label>
                {props.error?.image != 'image is a required field' && <Text color='red' fontSize='sm' fontWeight='bold' ml='auto'>{props.error?.image}</Text>}
            </Flex>
            <Flex alignItems='center' position='relative'>
                <Flex alignItems='center' gap={4} px={4} py={2} backgroundColor='white.darker' w='fit-content' mt={1}>
                    <Icon>
                        <FiCamera size='md' color="grey.400" />
                    </Icon>
                    <CustomFileInput setFieldValue={props.setFieldValue} name={props.name} />
                </Flex>
                <Text position='absolute' maxW='50%' left='45%' fontSize='sm'>{props.image?.name}</Text>
            </Flex>
        </Box>
    )
}

