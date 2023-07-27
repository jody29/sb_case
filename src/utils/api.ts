import axios from 'axios'
import ky from 'ky'

import { env } from '@/env/client.mjs'
import { error } from 'console';

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
    return await ky.post(`${url}/posts`, {
        body: data,
        headers: { 
            token: env.NEXT_PUBLIC_API_KEY,
            'Content-type': 'multipart/form-data'
        },
        
    })
    .json();
}