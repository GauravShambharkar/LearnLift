const { default: axios } = require("axios");
const { userModel } = require("../Models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { user_jwt_secret } = require("../config");
const { generate_UserToken } = require("../utils");
const { response } = require("express");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (name && email && password) {
      if (email.includes("@gmail.com")) {
        if (password.length > 8) {
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
        } else {
          res.status(400).send({
            msg: "password must be at least 8 characters long",
          });
        }
      } else {
        res.status(400).send({
          msg: "email must include @email.com",
        });
      }
    } else {
      res.status(400).send({
        msg: "all fields are required",
      });
    }
  } catch (err) {
    res.status(500).send({
      msg: "user controller error",
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).send({
        msg: "Invalid email or password",
      });
    }

    // Verify password
    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass) {
      return res.status(401).send({
        msg: "Invalid email or password",
      });
    }

    // Generate token
    const token = await generate_UserToken({ id: user._id }, user_jwt_secret);

    if (token) {
      res.send({
        name: user.name,
        email: user.email,
        token: token,
        role: user.role || "user",
      });
    } else {
      res.status(500).send({
        msg: "Token generation failed",
      });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send({
      msg: "Internal server error",
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
