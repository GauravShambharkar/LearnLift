import React from "react";
import { NavLink } from "react-router-dom";
import Routing from "./Routing";

const Nav = () => {
  return (
    <>
      <div className="flex justify-end items-center p-4 bg-gray-800 text-white">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/course">Course</NavLink>
        <NavLink to="/register">Register</NavLink>
        <Routing/>
      </div>
    </>
  );
};

export default Nav;
