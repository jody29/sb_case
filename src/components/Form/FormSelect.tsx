import { FormLabel, Select } from "@chakra-ui/react"
import { FocusEvent, InputHTMLAttributes, useState } from "react"

type Value = string | number

interface Option {
    value: Value;
    label: Value;
}

interface formSelectProps extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    name: string;
    options: Option[];
    color?: string;
    label?: string;
    placeholder?: string;
    hasError?: boolean;
    onChange?: (value: string) => void;

}

export const FormSelect = ({ 
    name,
    options: items,
    label,
    required,
    placeholder,
    hasError,
    defaultValue = '',
    onChange = () => {

    },
    disabled,
    ...rest
}: formSelectProps) => {
    const [hasFocus, setFocus] = useState(false)

    const onFocus = (e: FocusEvent<HTMLSelectElement>) => {
        if (rest.onFocus) rest.onFocus(e);
        setFocus(true)
    }

    const onBlur = (e: FocusEvent<HTMLSelectElement>) => {
        if (rest.onBlur) rest.onBlur(e);
        setFocus(false)
    }

    return (
        <>
            <FormLabel htmlFor={name} fontSize='sm' color='grey.700' mb={0}>{label}</FormLabel>
            <Select
                id={name}
                name={name}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={e => onChange(e.target.value)}
                disabled={disabled}
                required={required}
                backgroundColor='white.darker'
                border={0}
                fontSize='sm'
                size={"md"}
                {...rest}
            >
                {placeholder && (
                    <option disabled value="" style={{ color: 'grey', fontStyle: 'italic' }}>
                        {placeholder}
                    </option>
                )}
                {items.map((item, index) => (
                    <option key={`${item}${index}`} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </Select>
        </>
    )
}