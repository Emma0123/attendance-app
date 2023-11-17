import { Flex, Text, Avatar, Box } from "@chakra-ui/react";

const AccessEmployee = () => {
  
  const boxTexts = [
    "Manage Accopunt Employee",
    "Manage Shift Employee",
    "View Attendance Employee",
  ];

  return (
    <>
      <Flex h={'80px'} bg={'#F2F2F2'} border={'1px black solid'}>
        <Text fontWeight={'bold'} m={'auto'} fontSize={'24px'}>
          Hi, HR✨
        </Text>
        <Avatar mt={'4'} mr={'4'} />
      </Flex>

      <Flex mt={'150px'} ml={'10'} mr={'10'} justifyContent="center">
        {[1, 2, 3].map((index) => (
          <Box
            _hover={{ shadow: "xl" }}
            key={index}
            flex="1"
            h={'200px'}
            bg={'#b6b6b6'}
            shadow={index === 1 ? 'lg' : index === 2 ? 'md' : 'sm'}
            display="flex"
            alignItems="center"
            justifyContent="center"
            mr={index !== 3 ? '8' : '0'}
            borderRadius={'md'}
          >
            <Text textAlign={'center'} textColor={'white'} fontSize={'20px'} m={'2'}>
              {boxTexts[index - 1]}
            </Text>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default AccessEmployee;
