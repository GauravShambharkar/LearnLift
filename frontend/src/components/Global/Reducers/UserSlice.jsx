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
      state.post.push(action.payload);
    },
    removePost: (state, action) => {
      state.post.filter((_, index) => {
        state.post = index !== action.payload;
      });
    },
  },
});

export default userSlice.reducer;
export const { addPost } = userSlice.actions;
