import { CSSObject } from '@chakra-ui/react'

export const globalStyle: CSSObject = {
    'html, body': {
        backgroundColor: 'white.darker'
    },
    body: {
        minWidth: '320px',
    },
    '*': {
        boxSizing: 'border-box',
    }
}