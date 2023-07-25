import { useFormik } from 'formik'
import { Button, Flex, Heading } from "@chakra-ui/react"
import { FormFileInput, FormInput } from "./FormInput"
import { FormSelect } from './FormSelect'
import { env } from '../../env/client.mjs'
import { useEffect, useState } from 'react'
import { fetchData } from '@/utils/api'
import { FormTextarea } from './FormTextarea'
import * as Yup from 'yup'

export const Form = () => {
    const [categories, setCategories] = useState([])

    const initialValues = {
        messageName: '',
        category: '',
        image: null,
        message: ''
    }

    const validationSchema = Yup.object({
        messageName: Yup.string().required(),
        category: Yup.string().required(),
        image: Yup.mixed().required(),
        message: Yup.string().required()
    })

    const formik = useFormik({
        initialValues,
        onSubmit: async values => {
            console.log(values)
        },
        validationSchema,
        isInitialValid: false
    })

    const { setFieldValue, values, handleSubmit, getFieldProps, isValid, isSubmitting } = formik

    useEffect(() => {
        const getCategories = async () => {
            const response = await fetchData(`${env.NEXT_PUBLIC_URL_ENDPOINT}/categories`)
            setCategories(response)
        }
        getCategories()
    }, [])

    return (
        <form onSubmit={handleSubmit} id='blogMessage' style={{ width: '100%' }}>
            <Flex flexDir='column' gap={6}>
                <Heading as='h2' fontSize='lg' fontWeight='bold'>Plaats een blog bericht</Heading>
                <FormInput label="Berichtnaam" setFieldValue={setFieldValue} {...getFieldProps('messageName')} />
                <FormSelect options={categories} setFieldValue={setFieldValue} label='Categorie' placeholder='Geen categorie' {...getFieldProps('category')} />
                <FormFileInput setFieldValue={setFieldValue} label='Header afbeelding' image={values.image ? values.image as File : undefined} {...getFieldProps('image')} />
                <FormTextarea setFieldValue={setFieldValue} label='Bericht' {...getFieldProps('message')} />
                <Flex justifyContent='center' >
                    <Button type='submit' fontSize='sm' disabled={!isValid || isSubmitting}>Bericht aanmaken</Button>
                </Flex>
            </Flex>
        </form>
    )
}