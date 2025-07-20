const { Router } = require("express");
const userRoute = Router();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const { userModel } = require("../database/db");
const {
  userLoginMiddleware,
  userDeleteMiddleware,
  user_jwt_Verification_Middleware,
} = require("../middleware/userMiddleware");

const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  jwtValid,
} = require("../controllers/userController");


userRoute.get("/read", async (req, res) => {
  const users = await userModel.find();
  res.send({
    users,
    // msg: "Hello from user route",
  });
});

userRoute.post("/register", registerUser);

userRoute.post("/login", userLoginMiddleware, loginUser);
userRoute.post("/login/token", user_jwt_Verification_Middleware, jwtValid);

userRoute.put("/updateUser", updateUser);
userRoute.delete("/deleteUser", userDeleteMiddleware, deleteUser);

module.exports = userRoute;
