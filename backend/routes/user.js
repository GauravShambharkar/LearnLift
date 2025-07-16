const { Router } = require("express");
const userRoute = Router();
const mongoose = require("mongoose");
const { userModel } = require("../database/db");
const userMiddleware = require("../middleware/userMiddleware");
const { registerUser, loginUser } = require("../controllers/userController");

userRoute.get("/", (req, res) => {
  res.send({
    msg: "Hello from user route",
  });
});

userRoute.post("/register", registerUser);

userRoute.post("/login", loginUser);

module.exports = userRoute;
