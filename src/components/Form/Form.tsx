import { useFormik } from 'formik'
import { Button, Flex, Heading, Input, Textarea } from "@chakra-ui/react"
import { FormFileInput, FormInput } from "./FormInput"
import { FormSelect } from './FormSelect'
import { env } from '../../env/client.mjs'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { fetchData } from '@/utils/api'

export const Form = () => {
    const [categories, setCategories] = useState([])

    const initialValues = {
        messageName: '',
        category: '',
        image: '',
        message: ''
    }

    const formik = useFormik({
        initialValues,
        onSubmit: async values => {
            console.log(values)
        },
    })

    const { setFieldValue, values, handleSubmit, getFieldProps } = formik

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
                <FormFileInput setFieldValue={setFieldValue} label='Header afbeelding' {...getFieldProps('image')} />
                <Flex justifyContent='center' >
                    <Button type='submit' fontSize='sm'>Bericht aanmaken</Button>
                </Flex>
            </Flex>
        </form>
    )
}