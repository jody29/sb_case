import { Box, BoxProps } from "@chakra-ui/react";

interface LabelProps extends BoxProps {
    htmlFor?: string;
    required?: boolean;
}

export const Label = ({ children, color, required, ...props }: LabelProps) => {
    return (
        <Box
          as="label"
          sx={{
            cursor: 'pointer',
            userSelect: 'none',
            fontsize: 'sm',
            color: color || 'grey.700'
          }}
          {...props}
        >
            {children}
            {required ? ' *' : null}
        </Box>
    );
};