import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./silce/usersSlice";

export const globalState = configureStore({
  reducer: {
    usersSlice,
  },
});
