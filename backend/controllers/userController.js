const { default: axios } = require("axios");
const { userModel } = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { user_jwt_secret } = require("../config");

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
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email,
  });
  const validPass = await bcrypt.compare(password, user.password);
  if (validPass) {
    const token = await jwt.sign({ id: user._id }, user_jwt_secret);
    if (token) {
      res.send({
        token: token,
      });
    } else {
      res.status(401).send({
        message: "wrong user password",
      });
    }
  } else {
    res.status(401).send({
      msg: "wrong user credential",
    });
  }
};


const user_jwtValid = (req, res) => {
  res.send({
    msg: "Token is valid",
  });
};


const updateUser = async (req, res) => {
  const { email, New_name } = req.body;

  const user = await userModel.findOne({ email });
  if (user) {
    const updatedUser = await userModel.findOneAndUpdate(
      { email },
      { name: New_name },
      { new: true }
    );
    res.send(updatedUser);
  } else {
    res.send({
      msg: "user not found",
    });
  }
};

const deleteUser = async (req, res) => {
  res.status(200).send({
    msg: "user deleted successfully",
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

module.exports = {
  registerUser,
  loginUser,
  user_jwtValid,
  upgradeToCreator,
  updateUser,
  deleteUser,
};
