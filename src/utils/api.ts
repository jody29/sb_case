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