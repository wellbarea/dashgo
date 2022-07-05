import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";

import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";

export default function UserList() {

    const [page, setPage] = useState(1);
    const { data, isLoading, error, isFetching } = useUsers(page);

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    async function handlePrefetchUser(userId: string) {
        await queryClient.prefetchQuery(['user', userId], async () => {
            const response = await api.get(`users/${userId}`)
            return response.data;
        })
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

                <Box flex="1" borderRadius={0} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários

                            { !isLoading && isFetching && (
                                <Spinner size="sm" color="gray.500" ml="4" />

                            ) }    
                        </Heading>

                        <Link href="/users/create" passHref>
                            <Button 
                                as="a" 
                                size="sm" 
                                fontSize="sm" 
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                                >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    { isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex>
                            <Text> Falha ao obter dados do usuarios</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme="whiteAlpha">
                                <Thead>
                                    <Tr>
                                        <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                            <Checkbox colorScheme="pink" />   
                                        </Th>
                                        <Th>Usuário</Th>
                                        { isWideVersion && <Th>Data de cadastro</Th> }
                                        <Th width="8"></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.users.map((user) => {
                                        return (
                                            <Tr px="6" key={user.id}>
                                                <Td px={["4", "4", "6"]}>
                                                    <Checkbox colorScheme="pink" />   
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                                                            <Text fontWeight="bold">{ user.name }</Text>
                                                        </Link>
                                                        <Text fontSize="sm" color="gray.300">{ user.email }</Text>
                                                    </Box>
                                                </Td>
                                                { isWideVersion && <Td>{user.createdAt}</Td> }
                                                <Td>
                                                { isWideVersion && (
                                                    <Button 
                                                        as="a" 
                                                        size="sm" 
                                                        fontSize="sm" 
                                                        colorScheme="purple"
                                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                                        >
                                                        Editar
                                                    </Button>
                                                )}
                                                </Td>
                                            </Tr>
                                        )
                                    })}
                                </Tbody>
                            </Table>

                            <Pagination 
                                totalCountRegisters={data.totalCount}
                                currentPage={page}
                                onPageChange={setPage} />
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    )
}