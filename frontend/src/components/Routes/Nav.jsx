import React from "react";
import { NavLink } from "react-router-dom";
import Routing from "./Routing";
import { FolderKeyIcon } from "lucide-react";

const Nav = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center p-4 gap-4 font-medium  text-black">
        <div className="flex gap-2 items-center">
          <FolderKeyIcon className="stroke-1" />
          <h2 className="font-medium">Learn Lift</h2>
        </div>
        <div className="flex gap-3">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive
                ? "text-black underline font-medium hover:text-black "
                : "text-gray-400 font-medium hover:text-black transition-all duration-300 ease-in-out hover:underline";
            }}
          >
            Home
          </NavLink>

          <NavLink
            to="/register"
            className={({ isActive }) => {
              return isActive
                ? "text-black font-medium"
                : "text-gray-400 font-medium hover:text-black transition-all duration-300 ease-in-out hover:underline";
            }}
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => {
              return isActive
                ? "text-black font-medium"
                : "text-gray-400 font-medium hover:text-black transition-all duration-300 ease-in-out hover:underline";
            }}
          >
            Login
          </NavLink>
        </div>
      </div>
      <Routing />
    </>
  );
};

export default Nav;
