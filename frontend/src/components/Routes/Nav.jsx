import React from "react";
import { NavLink } from "react-router-dom";
import Routing from "./Routing";

const Nav = () => {
  return (
    <>
      <div className="flex justify-end items-center p-4 gap-4 font-medium bg-black text-white">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? "text-blue-500" : "text-white";
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) => {
            return isActive ? "text-blue-500" : "text-white";
          }}
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => {
            return isActive ? "text-blue-500" : "text-white";
          }}
        >
          Login
        </NavLink>
      </div>
      <Routing />
    </>
  );
};

export default Nav;
