import { Avatar, Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useGeolocation from "react-hook-geolocation";
import { useSelector } from "react-redux";
import { API_CALL } from "../../helper";

const ClockPage = () => {
  const geolocation = useGeolocation();
  const toast = useToast();
  const username = useSelector((state) => state.usersSlice.username);
  const userId = useSelector((state) => state.usersSlice.id);

  const [date, setDate] = useState(new Date());
  const [dataShift, setDataShift] = useState([]);
  const [shift, setShift] = useState({});

  useEffect(() => {
    getShift();
  }, []);

  useEffect(() => {
    handleShift()
  }, [date])

  useEffect(() => {
    setInterval(() => { setDate(new Date()) }, 1000)
  }, []);

  const getShift = async () => {
    const result = await API_CALL.get('/shift')
    setDataShift(result.data)
    console.log("get Shift:", result.data)
  }

  const getLocation = () => {
    const tgl = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
    console.log("user ID:", userId);
    console.log("username:", username);
    console.log("Latitude:", geolocation.latitude);
    console.log("Longitude:", geolocation.longitude);
    console.log("Clock Out:", new Date(tgl));
    console.log("tgl:", tgl);
  }

  const handleClockIn = async () => {
    const coordinates = `${geolocation.latitude}, ${geolocation.longitude}`;
    // console.log("user ID:", userId);
    // console.log("shift ID:", shift.id);
    // console.log("in:", new Date());
    // console.log("location:", coordinates);
    try {
      await API_CALL.post('/attendance/clockin', {
        userId: userId,
        shiftId: shift.id,
        in: new Date(),
        location: coordinates
      })
      return toast({
        title: 'Clock In',
        description: 'Clock In Success',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Clock In',
        description: 'you\'ve been already clock in',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      console.log("Clock In Error:", error);
    }

  }

  const handleClockOut = async () => {
    // const coordinates = `${geolocation.latitude}, ${geolocation.longitude}`;
    // console.log("user ID:", userId);
    // console.log("shift ID:", shift.id);
    // console.log("out:", new Date());
    // console.log("location:", coordinates);
    try {
      await API_CALL.post('/attendance/clockout', {
        userId: userId,
        out: new Date(),
      })
      return toast({
        title: 'Clock Out',
        description: 'Clock Out Success',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
      if (error.request.status === 400) {
        toast({
          title: 'Clock Out',
          description: 'you\'ve been already clocked out',
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
      if (error.request.status === 404) {
        toast({
          title: 'Clock Out',
          description: 'You have\'t clock in. Please do clock in first!',
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
      console.log("Clock Out Error:", error);
    }
  }

  const handleShift = () => {
    // await getShift();
    const tgl = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
    dataShift.forEach(({ id, name, start, end }) => {
      if (new Date() < new Date(tgl + ' ' + end) && new Date() > new Date(tgl + ' ' + start)) {
        return setShift({ id, name });
      }
    });
  };

  // console.log(shift.name);
  return (
    <>
      <Flex h={"80px"} bg={"#F2F2F2"} border={"1px black solid"}>
        <Text fontWeight={"bold"} m={"auto"} fontSize={"24px"}>
          Hi, {username}
        </Text>
        <Avatar mt={"4"} mr={"2"} size={"md"} />
      </Flex>

      <Text cursor={"default"} h={"100px"} marginTop={"40px"} alignItems={"center"} fontWeight={"500"} fontSize={"60px"} justifyContent={"center"} display={"flex"} textTransform={'uppercase'}>{shift.name}</Text>
      <Box cursor={"default"} display={"flex"} flexDirection={"column"} alignItems={"center"} marginLeft={"41%"} justifyContent={"center"} width={"18%"}>
        <Text h={"100px"} marginTop={"40px"} alignItems={"center"} borderBottom={"8px solid"} fontWeight={"500"} fontSize={"100px"} justifyContent={"center"} display={"flex"}>{date.toTimeString().split(' ')[0]}</Text>
        <Text h={"40px"} alignItems={"center"} fontWeight={"400"} fontSize={"40px"} justifyContent={"center"} display={"flex"}>{date.toDateString()}</Text>
      </Box>
      <Flex h={"90px"} marginTop={"80px"} justifyContent={"space-evenly"}>
        <Button variant={"outline"} width={"30%"} colorScheme='blue' size={"auto"} onClick={handleClockIn}>Clock In</Button>
        <Button variant={"outline"} width={"30%"} colorScheme='blue' size={"auto"} onClick={handleClockOut}>Clock Out</Button>
      </Flex>
    </>
  );
};

export default ClockPage