import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Reducers/UserSlice";

export const store = configureStore({
  reducer: {
    userSlice,
  },
});
