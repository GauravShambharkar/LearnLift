const { Router } = require("express");
const userRoute = Router();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const { userModel } = require("../database/db");
const {userLoginMiddleware, userDeleteMiddleware} = require("../middleware/userMiddleware");

const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

app.use(userLoginMiddleware);

userRoute.get("/read", async (req, res) => {
  const users = await userModel.find();
  res.send({
    users,
    // msg: "Hello from user route",
  });
});

userRoute.post("/register", registerUser);

userRoute.post("/login", userLoginMiddleware, loginUser);
userRoute.put("/updateUser", updateUser);
userRoute.delete("/deleteUser", userDeleteMiddleware, deleteUser);

module.exports = userRoute;
