import axios from 'axios'

import { env } from '@/env/client.mjs'

export const fetchData = async (url: string) => {
    try {
        const headers = {
            token: env.NEXT_PUBLIC_API_KEY
        };

        const response = await axios.get(url, { headers })

        return response.data
    } catch (error) {
        console.error('Error fetching data:', error);
        return null
    }
}

export interface dataProps {
    title: string;
    category_id: string;
    image: File;
    content: string;
}


export const postData = async (data: FormData, url: string) => {
    try {
        const headers = {
            token: env.NEXT_PUBLIC_API_KEY
        };

        const formDataObject: dataProps = {
            title: data.get('title') as string,
            category_id: data.get('category_id') as string,
            image: data.get('image') as File,
            content: data.get('content') as string
        }

        return await axios.post(`${url}/posts`, formDataObject, { headers })
    } catch (error) {
        console.error('Error posting data:', error)
        return null
    }
}