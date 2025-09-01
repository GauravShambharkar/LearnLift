import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster, toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        email: user.email,
        password: user.password,
      });

      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("role", response.data.role || "user");

        toast.success("Login successful! Redirecting...");
        // setMessage("Login successful! Redirecting...");

        setTimeout(() => {
          // Refresh the page to update navbar automatically
          window.location.reload();
          navigate("/dashboard");
          // navigate("/profile");
          e.target.reset();
          setUser({ email: "", password: "" });
        }, 1500);
      } else {
        toast.error("Invalid credentials. Please try again.");
        // setMessage("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        if (error.response.status === 401) {
          toast.warning("Invalid email or password.");
          // setMessage("Invalid email or password.");
        } else if (error.response.status === 404) {
          toast.warning("User not found.");
          // setMessage("User not found.");
        } else {
          toast.error(
            error.response.data?.msg || "Login failed. Please try again."
          );
          // setMessage(
          //   error.response.data?.msg || "Login failed. Please try again."
          // );
        }
      } else if (error.message) {
        toast.error("Check your internet connection...");
        // setMessage("Check your internet connection...");
      } else {
        toast.error("An unexpected error occurred. check your network.");
        // setMessage("An unexpected error occurred. check your network.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="allcenter min-h-screen bg-gray-50 p-4">
        <Toaster position="top-center" richColors />
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Login Account
            </CardTitle>
            <CardDescription className="text-center">
              Welcome back! Sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFormSubmit} className="space-y-4">
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
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
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

              <div className="space-y-3 pt-4">
                <button type="submit" className="shad-btn" disabled={isLoading}>
                  {isLoading ? "Signing In..." : "Sign In"}
                </button>
              </div>
              <div className="xcenter gap-2 text-sm ">
                Dont Have An Account?{" "}
                <a href="/register" className="text-blue-500">
                  Register Now
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Login;
