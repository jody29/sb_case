import { useFormik } from 'formik'
import { Button, Flex, Heading } from "@chakra-ui/react"
import { FormFileInput, FormInput } from "./FormInput"
import { FormSelect } from './FormSelect'
import { env } from '../../env/client.mjs'
import { useEffect, useState } from 'react'
import { fetchData, postData } from '@/utils/api'
import { FormTextarea } from './FormTextarea'
import * as Yup from 'yup'

interface FormValues {
    title: string;
    category_id: string;
    image: File | null;
    content: string;

}

export const Form = () => {
    const [categories, setCategories] = useState([])

    const initialValues: FormValues = {
        title: '',
        category_id: '',
        image: null,
        content: ''
    }

    const validationSchema = Yup.object({
        title: Yup.string().required(),
        category_id: Yup.string().required(),
        image: Yup.mixed().required(),
        content: Yup.string().required()
    })

    const formik = useFormik({
        initialValues,
        onSubmit: async values => {
            try {
            const formData = new FormData()
            const { image, ...restValues } = values

            if (image !== null) {
                formData.append('image', image, image.name)
            }
                
            Object.entries(restValues).forEach(([key, value]) => {
                formData.append(key, value)
            })

            const response = await postData(formData, env.NEXT_PUBLIC_URL_ENDPOINT)

            return response
        } catch (error) {
            console.error('Error posting data:', error)
        }
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
                <FormInput label="Berichtnaam" setFieldValue={setFieldValue} {...getFieldProps('title')} />
                <FormSelect options={categories} setFieldValue={setFieldValue} label='Categorie' placeholder='Geen categorie' {...getFieldProps('category_id')} />
                <FormFileInput setFieldValue={setFieldValue} label='Header afbeelding' image={values.image ? values.image as File : undefined} {...getFieldProps('image')} />
                <FormTextarea setFieldValue={setFieldValue} label='Bericht' {...getFieldProps('content')} />
                <Flex justifyContent='center' >
                    <Button type='submit' fontSize='sm' disabled={!isValid || isSubmitting}>Bericht aanmaken</Button>
                </Flex>
            </Flex>
        </form>
    )
}