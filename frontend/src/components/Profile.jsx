import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User, Mail, LogOut, Shield, Link2Icon } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [deleteAccount, setDeleteAccount] = useState();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("name");
    const userEmail = localStorage.getItem("email");
    const userRole = localStorage.getItem("role");

    if (!token) {
      navigate("/login");
      return;
    }

    setUser({
      name: userName || "Unknown User",
      email: userEmail || "No email",
      role: userRole || "user",
    });
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    // localStorage.clear();
    navigate("/login");
  };

  const handleDelete = async (email, name) => {
    // if (!email || !password) {
    //   setMessage("Please enter email and password to delete account.");
    //   return;
    // }

    try {
      const response = await fetch("http://localhost:3000/user/deleteUser", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });

      if (response.ok) {
        setDeleteAccount(false);
        console.log(response);
        setMessage("Account deleted successfully.");
        setTimeout(() => {
          localStorage.clear();
          navigate("/register");
        }, 1800);
      } else {
        setMessage("Failed to delete account. Please check your credentials.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      setMessage("Network error. Please check your connection.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
            <User className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">{user.name}</CardTitle>
          <CardDescription>Welcome to your LearnLift profile</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <User className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-700">Name</p>
                <p className="text-lg font-semibold">{user.name}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Mail className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-700">Email</p>
                <p className="text-lg font-semibold">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Shield className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm font-medium text-gray-700">Role</p>
                <p className="text-lg font-semibold capitalize">{user.role}</p>
              </div>
            </div>
          </div>

          <div className="pt-4 space-y-3 border ">
            <Button
              type="button"
              variant="outline"
              className="delete-Btn w-full  "
              onClick={() => {
                setDeleteAccount(true);
              }}

              // disabled={isLoading || !user.email || !user.password}
            >
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>

      {deleteAccount && (
        <div className="w-full h-screen bg-[#ffffff99] backdrop-blur-sm absolute">
          <div className="w-66 h-30 border p-4 rounded-md allcenter gap-3 flex-col shadow-md bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h2>Confirm Delete?</h2>
            <div className="w-full flex xcenter gap-3">
              <Button
                onClick={() => {
                  // setDeleteAccount(true);
                  handleDelete(user.email, user.name);
                }}
                className="delete-Btn"
              >
                Delete
              </Button>
              <Button
                onClick={() => {
                  setDeleteAccount(false);
                }}
                className="save"
              >
                Cancle
              </Button>
            </div>
          </div>
        </div>
      )}

      {message && (
        <div className="w-full h-screen bg-[#ffffff99] backdrop-blur-sm absolute">
          <div className="w-66 h-30 border p-4 rounded-md allcenter gap-3 flex-col shadow-md bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1>{message}</h1>
            {/* <Link2Icon /> */}
            {/* <Link>Register Now</Link> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
