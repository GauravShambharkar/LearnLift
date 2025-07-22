import React from "react";
import { Route, Routes } from "react-router-dom";
import Registerform from "../components/Registerform";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/">Home</Route>
        <Route path="/profile">Profile</Route>
        <Route path="/course">Courses</Route>
        <Route path="/register" element={<Registerform />}>
          Register
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
