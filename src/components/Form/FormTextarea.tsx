import { Box, Textarea } from "@chakra-ui/react"
import { Label } from "../shared/Label"
import { InputtWrapper } from "./FormSelect";

interface formTextareaProps {
    label: string;
    name: string;
    setFieldValue: (field: string, value: any) => void
}

export const FormTextarea = (props: formTextareaProps) => {
    return (
        <Box>
            <Label htmlFor={props.name} fontSize='sm' color='grey.700' mb={0}>{props.label}</Label>
            <InputtWrapper background='white.darker'>
                <Textarea maxLength={300} h='214px' padding={2} fontSize='sm' onChange={e => { props.setFieldValue(props.name, e.target.value) }} />
            </InputtWrapper>
        </Box>
    )
}