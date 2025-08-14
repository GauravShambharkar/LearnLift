import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { data, useNavigate } from "react-router-dom";

const Registerform = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:3000/user/register", {
        name: user.name,
        email: user.email,
        password: user.password,
      });

      if (user.password.length < 8) {
        setMessage("password should be at least 8 character");
      } else if (response.data) {
        setTimeout(() => {
          navigate("/login");
        }, 1500);
        setMessage("Registration successful! You can now login.");
        e.target.reset();
        setUser({ name: "", email: "", password: "" });
      }
      // else {
      //   setMessage(data.msg || "Registration failed. Please try again.");
      // }
    } catch (error) {
      console.error("Registration error:", error);
      setMessage("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (email, password) => {
    if (!email || !password) {
      setMessage("Please enter email and password to delete account.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/user/deleteUser", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setMessage("Account deleted successfully.");
      } else {
        setMessage("Failed to delete account. Please check your credentials.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      setMessage("Network error. Please check your connection.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Create Account
          </CardTitle>
          <CardDescription className="text-center">
            Join LearnLift to start your learning journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">
                Username
              </label>
              <Input
                id="username"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                type="text"
                placeholder="Enter your username"
                value={user.name}
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <Input
                id="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="email"
                placeholder="Enter your email"
                value={user.email}
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                placeholder="Enter your password"
                value={user.password}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2 ">
              <label htmlFor="password" className="text-sm w-full font-medium">
                Confirm Password
              </label>
              <Input
                id="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                placeholder="Enter your password"
                value={user.password}
                required
                disabled={isLoading}
              />
            </div>
            {message && (
              <div
                className={`p-3 rounded-md text-sm ${
                  message.includes("successful")
                    ? "bg-green-100 text-green-700 border border-green-200"
                    : "bg-red-100 text-red-700 border border-red-200"
                }`}
              >
                {message}
              </div>
            )}

            <div className="x-center gap-2">
              Already Have An Account?{" "}
              <a href="/login" className="text-blue-500">
                Login Now
              </a>
            </div>

            <div className="space-y-3  pt-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => handleDelete(user.email, user.password)}
                disabled={isLoading || !user.email || !user.password}
              >
                Delete Account
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Registerform;
