import { useFormik } from 'formik'
import { Button, Flex, Heading, Input } from "@chakra-ui/react"
import { FormInput } from "./FormInput"
import { FormSelect } from './FormSelect'

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

    const categories = [
        {
            label: 'hup',
            value: 'hup'
        },
        {
            label: 'hup2',
            value: 'hup2'
        },
        {
            label: 'hup3',
            value: 'hup3'
        }
    ]

    return (
        <form onSubmit={handleSubmit} id='blogMessage' style={{ width: '100%' }}>
            <Flex flexDir='column' gap={6}>
                <Heading as='h2' fontSize='lg' fontWeight='bold'>Plaats een blog bericht</Heading>
                <FormInput label="Berichtnaam" {...getFieldProps('messageName')} />
                <FormSelect options={categories} label='Categorie' placeholder='Geen categorie' {...getFieldProps('category')} />
                <Flex justifyContent='center' >
                    <Button type='submit' form='blogMessage' fontSize='sm'>Bericht aanmaken</Button>
                </Flex>
            </Flex>
        </form>
    )
}