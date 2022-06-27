import { FormControl, FormErrorMessage, FormLabel, Input as ChackraInput, InputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form';

interface Props extends InputProps {
  name: string;
  label?: string;
  error?: FieldError;
} 

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = ({ name, label, error = null, ...rest }: Props, ref) => {
    return (
        <FormControl isInvalid={!!error}>
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
              ref={ref}
              {...rest}
            />

            { !!error && (
              <FormErrorMessage>{error.message}</FormErrorMessage>
            )}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase);