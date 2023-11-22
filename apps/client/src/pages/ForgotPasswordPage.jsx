import { Box, Button, FormControl, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { API_CALL } from "../helper";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
    const navigate = useNavigate();
    const [ inEmail, setInEmail ] = useState();

    const onSend = async () => {
        const result = await API_CALL.post('/reset/email', {email: inEmail})
        navigate('/');
        console.log("OnSend: ",result);
        // console.log(inEmail);
    };

    return <>
    <Box w={'25%'} p={'25px 15px'} left={'50%'} top={'50%'} position={'fixed'} transform={'auto'} translateX={'-50%'} translateY={'-50%'} borderRadius={'8px'} boxShadow={'lg'}>
        <Heading textAlign={'center'} mb={'30px'}>Forgot Password</Heading>
        <FormControl>
            <Text mb={'10px'}>Email</Text>
            <Input placeholder="input your email" type="email" onChange={(e) => setInEmail(e.target.value)}/>
        </FormControl>
        <Button w={'100%'} colorScheme="teal" mt={'25px'} onClick={onSend}>Send</Button>
    </Box>
    </>
}

export default ForgotPasswordPage;