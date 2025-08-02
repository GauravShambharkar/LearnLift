import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Register from "../Register";
import Registerform from "../Registerform";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/Login" element={<Login />}>
          Login
        </Route>
        <Route path="/Register" element={<Registerform />}>
          Register
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
