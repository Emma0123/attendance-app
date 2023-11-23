import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useGeolocation from "react-hook-geolocation";
import { useSelector }  from "react-redux";

const ClockPage = () => {
  const geolocation = useGeolocation();
  const username = useSelector((state) => state.usersSlice.username);

  const [ date, setDate ] = useState(new Date()) ;

  useEffect(() =>{
    setInterval(() => setDate(new Date()), 1000)

    // return () => {clearInterval(timer)};
  },[]);

  const getLocation = () =>{
    console.log("username:", username);
    console.log("Latitude:", geolocation.latitude);
    console.log("Longitude:", geolocation.longitude);
    console.log("Clock Out:", new Date());
  }
  // console.log(date.toLocaleTimeString());
  return (
    <>
      <Flex h={"80px"} bg={"#F2F2F2"} border={"1px black solid"}>
        <Text fontWeight={"bold"} m={"auto"} fontSize={"24px"}>
          Hi, {username}
        </Text>
        <Avatar mt={"4"} mr={"2"} size={"md"} />
      </Flex>

      <Text cursor={"default"} h={"100px"} marginTop={"40px"} alignItems={"center"} fontWeight={"500"} fontSize={"60px"} justifyContent={"center"} display={"flex"}>SHIFT 1</Text>
      <Box cursor={"default"} display={"flex"} flexDirection={"column"} alignItems={"center"} marginLeft={"41%"} justifyContent={"center"} width={"18%"}>
        <Text h={"100px"} marginTop={"40px"} alignItems={"center"} borderBottom={"8px solid"} fontWeight={"500"} fontSize={"100px"} justifyContent={"center"} display={"flex"}>{date}</Text>
        <Text h={"40px"} alignItems={"center"} fontWeight={"400"} fontSize={"45px"} justifyContent={"center"} display={"flex"}>16/11/2023</Text>
      </Box>
      <Flex h={"90px"} marginTop={"80px"} justifyContent={"space-evenly"}>
        <Button variant={"outline"} width={"30%"} colorScheme='blue' size={"auto"}>Clock In</Button>
        <Button variant={"outline"} width={"30%"} colorScheme='blue' size={"auto"} onClick={getLocation}>Clock Out</Button>
      </Flex>
    </>
  );
};

export default ClockPage