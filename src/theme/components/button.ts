import { ComponentStyleConfig } from "@chakra-ui/react";

import { keyboardFocussed } from "../tools/keyboard-focussed";

export const button: ComponentStyleConfig = {
    baseStyle: {
        borderRadius: '20px',
        fontWeight: 'bold',
        color: 'white'
    },
    defaultProps: {
        variant: 'orange'
    },
    variants: {
        orange: {
            backgroundColor: 'orange.light',
            paddingX: 12,
            paddingY: 4,
            _hover: {
                backgroundColor: 'orange'
            }
        }
    }
}