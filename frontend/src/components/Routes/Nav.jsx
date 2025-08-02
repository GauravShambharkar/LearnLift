import React from "react";
import { NavLink } from "react-router-dom";
import Routing from "./Routing";
import { FolderArchiveIcon } from "lucide-react";

const Nav = () => {
  return (
    <>
      <div className="w-full fixed flex justify-between items-center p-4 gap-4 font-medium bg-black text-white">
        <div className="flex gap-2 items-center">
          <FolderArchiveIcon />
          <h2 className="font-bold">Learn Lift</h2>
        </div>
        <div className="flex gap-3">
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
      </div>
      <Routing />
    </>
  );
};

export default Nav;
