const { configureStore } = require("@reduxjs/toolkit");
import userSlice from "./Reducers/UserSlice";

export const store = configureStore({
  reducer: {
    userState: userSlice,
  },
});
