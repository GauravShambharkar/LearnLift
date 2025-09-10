import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Routing from "./Routing";
import { FolderKeyIcon, User, LogOut, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

const Nav = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  // Simple function to check if user is logged in
  const checkIfUserIsLoggedIn = () => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");

    if (token) {
      setIsAuthenticated(true);
      // navigate("/dashboard");
      // navigate("/profile");
      setUserName(name || "User");
    } else {
      setIsAuthenticated(false);
      setUserName("");
    }
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
    // Listen for localStorage changes (e.g., logout from Profile)
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    setUserName("");

    // Refresh the page to update navbar automatically
    navigate("/login");
  };

  return (
    <>
      <div className="w-full flex justify-between text-sm border-b-2 border-dashed items-center p-4 gap-4 font-medium text-black">
        <div className="flex gap-2 items-center">
          <FolderKeyIcon className="stroke-1" />
          <h2 className="font-medium">Learn Lift</h2>
        </div>
        <div className="flex gap-3 items-center">
          {/* Only show Home link if user is NOT logged in */}
          {!isAuthenticated && (
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive
                  ? "text-black underline font-medium hover:text-black  "
                  : "text-gray-400 font-medium hover:text-black  transition-all duration-300 ease-in-out hover:underline";
              }}
            >
              Home
            </NavLink>
          )}

          {/* Show Register and Login only if user is NOT logged in */}
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
              {/* Show search bar, user info, profile, and logout if user IS logged in */}
              <div className="flex items-center gap-2  ">
                <Search className="w-5" />
                {/* <input type="text" placeholder="Explore your learning..." /> */}
                <Input type="email" placeholder="Explore your learning..." />
              </div>
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
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "text-black font-medium"
                    : "text-gray-400 font-medium hover:text-black transition-all duration-300 ease-in-out hover:underline";
                }}
                to="/dashboard"
              >
                dashboard
              </NavLink>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="log-out-Btn delete-Btn"
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
