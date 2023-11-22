import { Box, Button, FormControl, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { API_CALL } from "../helper";

const ResetPasswordPage = () => {
    const location = useLocation();
    const [ inNewPassword, setInNewPassword ] = useState();
    const [ inConfirmPassword, setInConfirmPassword ] = useState();

    const handleClick = () => {
        const token = location.search.split('=')[1]
        if(inNewPassword === inConfirmPassword){
            API_CALL.post('/reset', {newPassword: inNewPassword} ,{
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            console.log("Password match");
        } else{
            console.log("Password not match");
        }

        // console.log('token: ', token)
        // console.log('newPassword: ', inNewPassword)
        // console.log('confirmPassword: ', inConfirmPassword)
    }
    // console.log(location.search.split('=')[1]);
    return <>
        <Box w={'25%'}  p={'25px 15px'} left={'50%'} top={'50%'} position={'fixed'} transform={'auto'} translateX={'-50%'} translateY={'-50%'} borderRadius={'8px'} boxShadow={'lg'}>
            <Heading textAlign={'center'} mb={'30px'}>Reset Password</Heading>
            <FormControl>
                <Text mb={'10px'}>New Password</Text>
                <Input placeholder="new password" type="password" onChange={(e) => setInNewPassword(e.target.value)}/>
            </FormControl>
            <FormControl mt={'15px'}>
                <Text mb={'10px'}>Confirm Password</Text>
                <Input placeholder="confirm password" type="password" onChange={(e) => setInConfirmPassword(e.target.value)}/>
            </FormControl>
            <Button w={'100%'} colorScheme="teal" mt={'25px'} onClick={handleClick}>Send</Button>
        </Box>
    </>
};

export default ResetPasswordPage;