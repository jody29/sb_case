import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { components } from "./components";
import { globalStyle } from "./global-style";
import { sizes } from "./sizes";
import { fonts, fontSizes } from "./typography";

export const theme = extendTheme({
    components,
    colors,
    sizes,
    fonts,
    fontSizes,
    styles: { global: globalStyle }
})

export type CustomTheme = typeof theme