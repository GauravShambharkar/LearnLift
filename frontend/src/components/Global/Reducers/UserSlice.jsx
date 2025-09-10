import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    userPost: [
      {
        title: "Mern stack course",
        description: "mern stack course",
        price: "999",
      },
    ],
  },
  reducers: {
    addPost: (state, action) => {
      // state.userPost.push(action.payload); //update and array
      state.userPost = [...state.userPost, action.payload];
    },

    removeuserPost: (state, action) => {
      state.userPost.filter((_, index) => {
        state.userPost = index !== action.payload; //returns an new array
      });
    },
  },
});

export default userSlice.reducer;
export const { addPost } = userSlice.actions;
