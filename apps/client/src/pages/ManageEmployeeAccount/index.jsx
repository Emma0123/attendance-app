import { Flex, Text, Avatar, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ManageAccountEmployee = () => {
  const boxTexts = [
    "Create Account Employee",
    "Update Account Employee",
    "Delete Account Employee",
  ];

  const navigate = useNavigate();

  const handleClick = (index) => {
    if (index === 0) {
      navigate("/hr-page3");
    } else if (index === 1) {
      navigate("/hr-page4");
    } else if (index === 2) {
      navigate("/hr-page5");
    }
  };

  return (
    <>
      <Flex h={'80px'} bg={'#F2F2F2'} border={'1px black solid'}>
        <Text fontWeight={'bold'} m={'auto'} fontSize={'24px'}>
          Manage Ma Employee 🥰
        </Text>
        <Avatar mt={'4'} mr={'4'} />
      </Flex>

      <Flex mt={'150px'} ml={'10'} mr={'10'} justifyContent="center">
        {[0, 1, 2].map((index) => (
          <Box
            _hover={{ shadow: "xl" }}
            key={index}
            flex="1"
            h={'200px'}
            bg={'#b6b6b6'}
            shadow={index === 0 ? 'lg' : index === 1 ? 'md' : 'sm'}
            display="flex"
            alignItems="center"
            justifyContent="center"
            mr={index !== 2 ? '8' : '0'}
            borderRadius={'md'}
            onClick={() => handleClick(index)}
            style={{ cursor: 'pointer' }}
          >
            <Text textAlign={'center'} textColor={'white'} fontSize={'20px'} m={'2'}>
              {boxTexts[index]}
            </Text>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default ManageAccountEmployee;
