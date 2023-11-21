import { Flex, Text, Avatar, Input, Select, Button } from "@chakra-ui/react";
import React from "react";

const CreateEmployeeAccount = () => {

  const [value, setValue] = React.useState('')
  const handleChange = (event) => setValue(event.target.value)

  return (
    <>
      <Flex h={'80px'} bg={'#F2F2F2'} border={'1px black solid'}>
        <Text fontWeight={'bold'} m={'auto'} fontSize={'24px'}>
          Create Employee Account
        </Text>
      </Flex>

      <Flex mt={'75px'} ml={'10'} mr={'10'} display={'column'} alignItems={'center'} justifyContent={"center"} mx="auto" maxW="500px">

        <Flex display={'column'} w={'500px'} mb={'4'}>
          <Text mb='8px'>Username :</Text>
          <Input
            onChange={handleChange}
            placeholder='employee username'
            size='md'
          />
        </Flex>

        <Flex display={'column'} w={'500px'} mb={'4'}>
          <Text mb='8px'>Email :</Text>
          <Input
            onChange={handleChange}
            placeholder='employee email'
            size='md'
          />
        </Flex>

        <Flex display={'column'} w={'500px'} mb={'4'}>
          <Text mb='8px'>Password :</Text>
          <Input
            onChange={handleChange}
            placeholder='employee password'
            size='md'
          />
        </Flex>

        <Flex display={'column'} mb={'8'}>
          <Text mb='8px'>Shift :</Text>
          <Select placeholder='Select Shift' w={'500px'} >
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </Flex>

        <Button w={'500px'} bg={'#808080'} textColor={'white'}
        >
          Create
        </Button>
      </Flex>
    </>
  );
};

export default CreateEmployeeAccount;
