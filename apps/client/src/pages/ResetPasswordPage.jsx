import { Box, Button, FormControl, Heading, Input, Text } from "@chakra-ui/react";

const ResetPasswordPage = () => {
    return <>
        <Box w={'25%'}  p={'25px 15px'} left={'50%'} top={'50%'} position={'fixed'} transform={'auto'} translateX={'-50%'} translateY={'-50%'} borderRadius={'8px'} boxShadow={'lg'}>
            <Heading textAlign={'center'} mb={'30px'}>Reset Password</Heading>
            <FormControl>
                <Text mb={'10px'}>New Password</Text>
                <Input placeholder="new password" type="password"/>
            </FormControl>
            <FormControl mt={'15px'}>
                <Text mb={'10px'}>Confirm Password</Text>
                <Input placeholder="confirm password" type="password"/>
            </FormControl>
            <Button w={'100%'} colorScheme="teal" mt={'25px'}>Send</Button>
        </Box>
    </>
};

export default ResetPasswordPage;