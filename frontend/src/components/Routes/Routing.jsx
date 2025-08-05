import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Register from "../Register";
import Registerform from "../Registerform";
import Profile from "../Profile";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registerform />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default Routing;
