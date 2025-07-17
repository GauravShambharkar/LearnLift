const { Router } = require("express");
const userRoute = Router();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const { userModel } = require("../database/db");
const userLoginMiddleware = require("../middleware/userMiddleware");
const { registerUser, loginUser } = require("../controllers/userController");

app.use(userLoginMiddleware);

userRoute.get("/", (req, res) => {
  res.send({
    msg: "Hello from user route",
  });
});

userRoute.post("/register", registerUser);

userRoute.post("/login", userLoginMiddleware, loginUser);

module.exports = userRoute;
