const { default: axios } = require("axios");
const { userModel } = require("../database/db");
const bcrypt = require("bcrypt");
const { response } = require("express");

const registerUser = async (req, res) => {
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
      password: bcrypt.hashSync(password, 10),
    });
    res.send({
      msg: "new user account created successfully",
    });
  }
};

const loginUser = async (req, res) => {
  res.send({
    msg: "successfully login",
  });
};

const upgradeToCreator = async (req, res) => {
  const { email } = req.body;

  const user = await userModel.findOne({ email });

  if (user) {
    user.role = "creator";
    await user.save();
    res.send({ msg: "user upgraded to creator successfully" });
  } else {
    res.send({ msg: "user not found" });
  }
};

module.exports = { registerUser, loginUser, upgradeToCreator };
