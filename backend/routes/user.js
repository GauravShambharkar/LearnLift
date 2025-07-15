const { Router } = require("express");
const userRoute = Router();
const mongoose = require("mongoose");
const { userModel } = require("../database/db");

const userMiddleware = require("../middleware/userMiddleware");

userRoute.get("/", (req, res) => {
  res.send({
    msg: "Hello from user route",
  });
});

userRoute.post("/register", async (req, res) => {
  const { name, email } = req.body;
  await userModel.create({
    name,
    email,
  });

  res.send({
    msg: "new user account createdd successfully ",
  });
});

userRoute.post("/login", (req, res) => {
  res.send({
    msg: "user Sign in page",
  });
});

module.exports = userRoute;
