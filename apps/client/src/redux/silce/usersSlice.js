import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_CALL } from "../../helper";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    id: null,
    email: "",
    username: "",
    password: "",
    role: "",
  },
  reducers: {
    login: (state, action) => {
      console.log("BREE PAYLOAD ATTENDANCE", action);
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.role = action.payload.role;
    },
    logout: (state, action) => {
      state = {
        id: null,
        email: "",
        username: "",
        password: "",
        role: "",
      };
    },
  },
});

export const {login,logout} = usersSlice.actions
export default usersSlice.reducer

export const checkDataUsers = () => {
    return async(dispatch) => {
        try {
            const token = localStorage.getItem("bre")
            console.log("local storage token: ", token);
            if(token){
                // const getUsers = await axios.get(`http://localhost:2001/users/keeplogin`, {
                //     headers: {
                //         Authorization: `Bearer ${token}`
                //     }
                // })
                const getUsers = await API_CALL.get('/users/keeplogin',{headers: {Authorization: `Bearer ${token}`}});
                console.log("GET USERS BREE", getUsers.data.result);
                localStorage.setItem("bre", getUsers.data.result.token)

                dispatch(login(getUsers.data.result))
            }
        } catch (error) {
          console.log("Midleware Error:",error);
            // dispatch(logout())
        }
    }
}

