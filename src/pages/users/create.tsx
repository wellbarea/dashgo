import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import { SubmitHandler, useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createFormSchema = yup.object().shape({
    name: yup.string().required('Nome Obrigatório'),
    email: yup.string().required('E-mail Obrigatório').email('E-mail Inválido'),
    password: yup.string().required('Senha Obrigatória').min(6, 'No minimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([yup.ref('password')]),
})

export default function CreateUser() {
    const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(createFormSchema) });
    const { errors } = formState;

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(res => setTimeout(res, 2000));
        console.log(`values`, values)
      } 

    return (
        <Box>
            <Header />

            <Flex 
                w="100%" 
                my="6" 
                maxWidth={1480} 
                mx="auto" 
                px="6">
                <Sidebar />

                <Box as="form" flex="1" borderRadius={0} bg="gray.800" p={["6", "8"]} onSubmit={handleSubmit(handleCreateUser)}>
                    <Heading size="lg" fontWeight="normal">criar Usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input 
                                name="name" 
                                label="Nome completo" 
                                {...register('name')} 
                                error={errors.name}/>

                            <Input 
                                name="email" 
                                type="email" 
                                label="E-mail" 
                                {...register('email')} 
                                error={errors.email}/>
                        </SimpleGrid>
                        
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]}w="100%">
                            <Input 
                                name="password" 
                                type="password" 
                                label="Nome completo" 
                                {...register('password')} 
                                error={errors.password}/>

                            <Input 
                                name="password_confirmation" 
                                type="email" 
                                label="Confirmação da senha" 
                                {...register('password_confirmation')} 
                                error={errors.password_confirmation}/>
                        </SimpleGrid>
                    </VStack>

                    <Flex
                        mt="8"
                        justify="flex-end"
                    >
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            
                            <Button 
                                type="submit" 
                                colorScheme="pink" 
                                isLoading={formState.isSubmitting}>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}