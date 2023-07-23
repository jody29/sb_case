import { ComponentStyleConfig } from "@chakra-ui/react";

export const heading: ComponentStyleConfig = {
    baseStyle: {
        fontFamily: "heading",
        fontWeight: 500,
        lineHeight: 1.2
    },
    sizes: {
        xl: {
            fontsize: "xl"
        },
        lg: {
            fontsize: "lg"
        }
    },
    variants: {
        h1: {
            fontsize: "xl",
            color: "white"
        },
        h2: {
            fontsize: "lg",
            color: "grey.900"
        }
    }
}