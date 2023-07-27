import { Box, Select } from "@chakra-ui/react";
import { FocusEvent, InputHTMLAttributes, useState } from "react";
import { Label } from "../shared/Label";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    type?: 'text' | 'textarea' | 'number' | 'password' | 'email' | 'tel' | 'search';
    color?: string;
    inputRef?: any;
    clearable?: boolean;
    hasError?: boolean;
    readonly?: boolean;
    onClear?: () => void;
    start?: string | number | JSX.Element;
    end?: string | number | JSX.Element;
    labelProps?: any;
}

type InputWrapperProps = InputProps & { hasFocus?: boolean; background?: string; padding?: number | string };

export const InputtWrapper = ({ hasFocus, background, hasError, padding, ...props }: InputWrapperProps) => {

    let additionalProps: any = {};

    if (hasFocus) {
        additionalProps = {
            ...additionalProps,
            outline: 'none',
            borderColor: 'grey.300'
        };
    }

    if (hasError) {
        additionalProps = {
            ...additionalProps,
            color: 'red',
            borderColor: 'red'
        };
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'grey',
                mt: '8px',
                padding: padding,
                borderRadius: '5px',
                borderColor: 'transparent',
                backgroundColor: background,
                position: 'relative',
                transition: 'all 0.3s ease',
                ...additionalProps,
            }}
            {...props}
        />
    )
}

type Value = string | number;

interface Option {
    id: Value;
    name: Value;
}

export interface FieldSelectProps extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    name: string;
    options: Option[];
    color?: string;
    label?: string;
    placeholder?: string;
    hasError?: boolean;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    onChange?: (value: Value) => void
}

export const FormSelect = ({
    name,
    options: items,
    color,
    label,
    required,
    placeholder,
    hasError,
    defaultValue = '',
    setFieldValue,
    disabled,
    ...rest
}: FieldSelectProps) => {
    const [hasFocus, setFocus] = useState(false);

    const onFocus = (e: FocusEvent<HTMLSelectElement>) => {
        if (rest.onFocus) rest.onFocus(e);
        setFocus(true);
    };

    const onBlur = (e: FocusEvent<HTMLSelectElement>) => {
        if (rest.onBlur) rest.onBlur(e);
        setFocus(false);
    };

    return (
        <Box>
            {label && (
                <Label htmlFor={name} color={color} required={required} fontSize='sm'>
                    {label}
                </Label>
            )}
            <InputtWrapper hasFocus={hasFocus} color={color} hasError={hasError} background='white.darker'>
                <Select
                    id={name}
                    name={name}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={e => setFieldValue(name, parseInt(e.target.value, 10))}
                    disabled={disabled}
                    required={required}
                    defaultValue={defaultValue}
                    fontSize='sm'
                    fontStyle='italic'
                    boxShadow='none'
                    border='none'
                >
                    {placeholder && (
                        <option disabled value="">
                            {placeholder}
                        </option>
                    )}
                    {items.map((item, index) => (
                        <option key={`${item}${index}`} value={item.id}>
                            {item.name}
                        </option>
                    ))}
                </Select>
            </InputtWrapper>
        </Box>
    )
}