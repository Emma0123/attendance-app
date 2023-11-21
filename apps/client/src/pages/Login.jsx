import { Box, Button, Input, Text } from "@chakra-ui/react";

const LoginPage = () => {
  return (
    <>
      <div style={{height:"100vh", width:"100vw"}}>
        <Box height={"100%"} alignItems={"center"} justifyContent={"center"} display={"flex"}>
          <Box height={"70%"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} p={"20px 30px"} borderRadius={"20px"} width={"30%"} display={"flex"} justifyContent={"flex-start"} flexDirection={"column"} gap={"5px"} >
            <Text marginBottom={"20px"} display={"flex"} justifyContent={"center"} fontWeight={"500"} fontSize={"50px"}>Welcome</Text>
            <Text fontWeight={"400"}>Username</Text>
            < Input placeholder="Your Username" size={"lg"}/>
            <Text marginTop={"15px"} fontWeight={"400"}>Password</Text>
            <Input placeholder="Your Password" size={"lg"}/>
            <Button marginTop={"40px"} colorScheme='facebook' size={"lg"}>Login</Button>
            <a href="" style={{fontSize:"12px", width:"28%", color:"rgb(56, 88, 152)"}}>Forgot password?</a>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default LoginPage;
