import React, { useState } from 'react';
import { Box, Text, Button, Flex, Table, Thead, Tbody, Tr, Th, Td, Input } from '@chakra-ui/react';

const ManageShift = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Fred', start: '08:00', end: '17:00' },
    { id: 2, name: 'Fulan', start: '09:00', end: '18:00' },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedStart, setEditedStart] = useState('');
  const [editedEnd, setEditedEnd] = useState('');
  const [newEmployeeName, setNewEmployeeName] = useState('');

  const deleteEmployee = (id) => {
    setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
  };

  const editEmployee = (id) => {
    setEditingId(id);

    const employeeToEdit = employees.find((employee) => employee.id === id);

    setEditedName(employeeToEdit.name);
    setEditedStart(employeeToEdit.start);
    setEditedEnd(employeeToEdit.end);
  };

  const saveEditedEmployee = () => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === editingId
          ? { ...employee, name: editedName, start: editedStart, end: editedEnd }
          : employee
      )
    );

    setEditingId(null);
    setEditedName('');
    setEditedStart('');
    setEditedEnd('');
  };

  const addEmployee = () => {
    const newEmployee = {
      id: employees.length + 1,
      name: newEmployeeName,
      start: '00:00',
      end: '00:00',
    };

    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    setNewEmployeeName('');
  };

  return (
    <>
      <Flex h={'80px'} bg={'#F2F2F2'} border={'1px black solid'} mb={'16'}>
        <Text fontWeight={'bold'} m={'auto'} fontSize={'24px'}>
          Manage Shift
        </Text>
      </Flex>

      <Button mb={'4'} justifyItems={'flex-end'} bg={'#808080'} textColor={'white'} ml={'2'} onClick={addEmployee}>
        Add +
      </Button>

      <Table borderWidth="1px" borderColor="gray.200">
        <Thead>
          <Tr>
            <Th textAlign={'center'} w={'5%'} borderWidth="1px" borderColor="gray.200">
              NO
            </Th>
            <Th textAlign={'center'} w={'30%'} borderWidth="1px" borderColor="gray.200">
              NAME
            </Th>
            <Th textAlign={'center'} w={'15%'} borderWidth="1px" borderColor="gray.200">
              START
            </Th>
            <Th textAlign={'center'} w={'15%'} borderWidth="1px" borderColor="gray.200">
              END
            </Th>
            <Th textAlign={'center'} w={'20%'} borderWidth="1px" borderColor="gray.200">
              ACTION
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((employee) => (
            <Tr key={employee.id} borderWidth="1px" borderColor="gray.200">
              <Td textAlign={'center'} borderWidth="1px" borderColor="gray.200">
                {employee.id}
              </Td>
              <Td textAlign={'center'} align="center" borderWidth="1px" borderColor="gray.200">
                {editingId === employee.id ? (
                  <Input
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    size="sm"
                  />
                ) : (
                  <Flex align="center" justify="center" flexDirection="column">
                    <Text maxW="200px" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
                      {employee.name}
                    </Text>
                  </Flex>
                )}
              </Td>
              <Td textAlign={'center'} borderWidth="1px" borderColor="gray.200">
                {editingId === employee.id ? (
                  <Input
                    value={editedStart}
                    onChange={(e) => setEditedStart(e.target.value)}
                    size="sm"
                  />
                ) : (
                  <Text>{employee.start}</Text>
                )}
              </Td>
              <Td textAlign={'center'} borderWidth="1px" borderColor="gray.200">
                {editingId === employee.id ? (
                  <Input
                    value={editedEnd}
                    onChange={(e) => setEditedEnd(e.target.value)}
                    size="sm"
                  />
                ) : (
                  <Text>{employee.end}</Text>
                )}
              </Td>
              <Td textAlign={'center'} borderWidth="1px" borderColor="gray.200" flexWrap={'wrap'}>
                {editingId === employee.id ? (
                  <>
                    <Button onClick={saveEditedEmployee} bg={'#808080'} textColor={'white'}>
                      Save
                    </Button>
                    <Button onClick={() => setEditingId(null)} bg={'#808080'} textColor={'white'}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      mb={'2'}
                      onClick={() => deleteEmployee(employee.id)}
                      bg={'#808080'}
                      textColor={'white'}
                    >
                      Delete
                    </Button>
                    <Button
                      onClick={() => editEmployee(employee.id)}
                      bg={'#808080'}
                      textColor={'white'}
                    >
                      Edit
                    </Button>
                  </>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default ManageShift;
