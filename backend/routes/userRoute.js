const { Router } = require("express");
const userRoute = Router();
const mongoose = require("mongoose");
const express = require("express");
const { userModel } = require("../Models/db");

// middleware
const { userLoginMiddleware, userDeleteMiddleware, user_jwt_Verification_Middleware,} = require("../middleware/userMiddleware");
// controllers
const { registerUser, loginUser, updateUser, deleteUser, user_jwtValid, } = require("../controllers/userController");

userRoute.get("/read", async (req, res) => {
  const users = await userModel.find();
  res.send({
    userData : users,
  }); 
});

// user route

userRoute.post("/register", registerUser);
userRoute.post("/login", userLoginMiddleware, loginUser);
userRoute.post("/login/token", user_jwt_Verification_Middleware, user_jwtValid);
userRoute.put("/updateUser", updateUser);
userRoute.delete("/deleteUser", userDeleteMiddleware, deleteUser);

module.exports = userRoute;
