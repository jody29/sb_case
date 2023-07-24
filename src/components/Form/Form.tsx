import { useFormik } from 'formik'
import { Button, Flex, Heading, Input } from "@chakra-ui/react"
import { FormInput } from "./FormInput"

export const Form = () => {
    const initialValues = {
        messageName: '',
        category: '',
        image: '',
        message: ''
    }

    const formik = useFormik({
        initialValues,
        onSubmit: async values => {

        },
    })

    const { setFieldValue, values, handleSubmit, getFieldProps } = formik

    return (
        <form onSubmit={handleSubmit} id='blogMessage' style={{ width: '100%' }}>
            <Flex flexDir='column' gap={6}>
                <Heading as='h2' fontSize='lg' fontWeight='bold'>Plaats een blog bericht</Heading>
                <FormInput label="Berichtnaam" {...getFieldProps('messageName')} />
                <Flex justifyContent='center' >
                    <Button type='submit' form='blogMessage' fontSize='sm'>Bericht aanmaken</Button>
                </Flex>
            </Flex>
        </form>
    )
}