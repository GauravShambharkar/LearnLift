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
  const { name, email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (user) {
    res.send({
      msg: "user already exist",
    });
  } else {
    await userModel.create({
      name,
      email,
      password,
    });
  }

  res.send({
    msg: "new user account created successfully ",
  });
});

userRoute.post("/login", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await userModel.findOne({ password, email });
  if (user) {
    res.send({
      msg: "login successfully",
    });
  } else {
    res.send({
      msg: "wrong user credential",
    });
  }
});

module.exports = userRoute;
