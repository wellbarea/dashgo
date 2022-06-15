import { FormControl, FormLabel, Input as ChackraInput, InputProps } from "@chakra-ui/react";

interface Props extends InputProps {
    name: string;
    label?: string;
} 

export function Input({ name, label, ...rest }: Props) {
    return (
        <FormControl>
            { !!label && <FormLabel htmlFor="email">{label}</FormLabel> }
            <ChackraInput 
              name={name} 
              id={name}
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
              {...rest}
            />
        </FormControl>
    )
}