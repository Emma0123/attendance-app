import { Flex, Text, Avatar, Box } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const AccessEmployee = () => {
  const navigate = useNavigate();

  const boxTexts = [
    "Manage Account Employee",
    "Manage Shift Employee",
    "View Attendance Employee",
  ];

  const goToManageAccountEmployee = () => {
    navigate('/hr-page2');
  };

  const goToViewAttendanceEmployee = () => {
    navigate('/hr-page6');
  }; 

  const goToManageShiftEmployee = () => {
    navigate('/hr-page7');
  };

  return (
    <>
      <Flex h={'80px'} bg={'#F2F2F2'} border={'1px black solid'}>
        <Text fontWeight={'bold'} m={'auto'} fontSize={'24px'}>
          Hi, HR✨
        </Text>
        <Avatar mt={'4'} mr={'4'} />
      </Flex>

      <Flex mt={'150px'} ml={'10'} mr={'10'} justifyContent="center">
        {[1, 2, 3].map((index) => {
          const onClickHandler = () => {
            if (index === 1) {
              goToManageAccountEmployee();
            } else if (index === 2) {
              goToManageShiftEmployee();
            } else if (index === 3) {
              goToViewAttendanceEmployee();
            }
          };

          return (
            <Box
              _hover={{ shadow: "xl" }}
              key={index}
              flex="1"
              h={'200px'}
              bg={'#b6b6b6'}
              shadow={'lg'}
              display="flex"
              alignItems="center"
              justifyContent="center"
              mr={index !== 3 ? '8' : '0'}
              borderRadius={'md'}
              onClick={onClickHandler}
              style={{ cursor: (index === 1 || index === 3) ? 'pointer' : 'auto' }}
            >
              <Text textAlign={'center'} textColor={'white'} fontSize={'20px'} m={'2'}>
                {boxTexts[index - 1]}
              </Text>
            </Box>
          );
        })}
      </Flex>
    </>
  );
};

export default AccessEmployee;
