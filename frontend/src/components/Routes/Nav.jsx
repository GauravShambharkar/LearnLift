import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Routing from "./Routing";
import { FolderKeyIcon, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const Nav = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");

    if (token) {
      setIsAuthenticated(true);
      setUserName(name || "User");
    } else {
      setIsAuthenticated(false);
      setUserName("");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    setUserName("");
    navigate("/login");
  };

  return (
    <>
      <div className="w-full flex justify-between items-center p-4 gap-4 font-medium text-black">
        <div className="flex gap-2 items-center">
          <FolderKeyIcon className="stroke-1" />
          <h2 className="font-medium">Learn Lift</h2>
        </div>
        <div className="flex gap-3 items-center">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive
                ? "text-black underline font-medium hover:text-black"
                : "text-gray-400 font-medium hover:text-black transition-all duration-300 ease-in-out hover:underline";
            }}
          >
            Home
          </NavLink>

          {!isAuthenticated ? (
            <>
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
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 text-gray-600">
                <User className="w-4 h-4" />
                <span className="text-sm">{userName}</span>
              </div>
              <NavLink
                to="/profile"
                className={({ isActive }) => {
                  return isActive
                    ? "text-black font-medium"
                    : "text-gray-400 font-medium hover:text-black transition-all duration-300 ease-in-out hover:underline";
                }}
              >
                Profile
              </NavLink>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <LogOut className="w-3 h-3" />
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
      <Routing />
    </>
  );
};

export default Nav;
