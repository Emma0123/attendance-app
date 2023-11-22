import React, { useState } from 'react';
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Input,
    Button,
    VStack,
    FormControl,
    FormLabel,
    Flex,
    Text,
    Avatar
} from '@chakra-ui/react';

const DeleteAccountEmployee = () => {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'Fred' },
        { id: 2, name: 'Fulan'},
        { id: 3, name: 'Fred' },
        { id: 4, name: 'Fred' },
        { id: 5, name: 'Fred' },
    ]);

    const deleteEmployee = (id) => {
        setEmployees(employees.filter((employee) => employee.id !== id));
    };

    return (
        <>
            <Flex h={'80px'} bg={'#F2F2F2'} border={'1px black solid'}>
                <Text fontWeight={'bold'} m={'auto'} fontSize={'24px'}>
                    Delete Employee Account
                </Text>
            </Flex>

            <Flex justifyContent={'space-between'} mt={4}>
                <Table>
                    <Thead>
                        <Tr>
                            <Th textAlign={'center'} w={'5%'}>ID</Th>
                            <Th textAlign={'center'} w={'75%'}>Name</Th>
                            <Th textAlign={'center'} w={'10%'}>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {employees.map((employee) => (
                            <Tr key={employee.id}>
                                <Td textAlign={'center'}>{employee.id}</Td>
                                <Td textAlign={'center'} align='center'>
                                    <Flex align="center" justify="center" flexDirection="column">
                                        <Avatar size='sm' mb={2} />
                                        <Text maxW="200px" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
                                            {employee.name}
                                        </Text>
                                    </Flex>
                                </Td>
                                <Td textAlign={'center'}>
                                    <Button onClick={() => deleteEmployee(employee.id)} bg={'#808080'} textColor={'white'}>
                                        Delete
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Flex>
        </>
    );
};

export default DeleteAccountEmployee;
