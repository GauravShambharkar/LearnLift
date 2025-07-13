import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/course">Course</NavLink>
      </div>
    </>
  );
};

export default Nav;
