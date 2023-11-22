import { Flex, Text, Avatar, Box } from "@chakra-ui/react";

const AttendanceEmployee = () => {
  
  return (
    <>
      <Flex h={'80px'} bg={'#F2F2F2'} border={'1px black solid'}>
        <Text fontWeight={'bold'} m={'auto'} fontSize={'24px'}>
          View Attendance Employee 🤭
        </Text>
        <Avatar mt={'4'} mr={'4'} />
      </Flex>

      <Flex mt={'50px'} ml={'10'} mr={'10'} justifyContent="center">
        {[1, 2].map((index) => (
          <Flex
            _hover={{ shadow: "xl" }}
            key={index}
            flex="1"
            h={'50px'}
            bg={'#b6b6b6'}
            display="flex"
            alignItems="center"
            // justifyContent="center"
            mr={'6'}
            borderRadius={'md'}
            flexDirection={'row'}
          >
            <Avatar size={'sm'} mr={'2'} ml={'4'}/>
            <Text>Ayu  </Text>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default AttendanceEmployee;
