import React from "react";
import { Route, Routes } from "react-router-dom";
const User = () => {
  return (
    <>
      <Routes>
        <Route path="/user" element={""} >Home</Route>
        <Route path="/course" element={""} >Course</Route>
      </Routes>
    </>
  );
};

export default User;
