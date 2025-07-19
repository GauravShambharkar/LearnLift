const { userModel } = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { user_jwt_secret } = require("../config");

const userLoginMiddleware = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).send({ msg: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.send({ msg: "Invalid credentials" });
    }

    // Credentials valid, move to next middleware or controller
    next();
  } catch (err) {
    console.error("Error in userMiddleware:", err);
    res.status(500).send({ msg: "Internal server error" });
  }
};

const user_jwt_Verification_Middleware = async (req, res, next) => {
  const token = req.header.token;
  const validUser = await jwt.verify(token, user_jwt_secret);
  if (validUser) {
    // res.send({
    //   msg: "valid token",
    // });
    next();
  } else {
    res.status(401).send({ msg: "Invalid token" });
  }
};

const userDeleteMiddleware = async (req, res, next) => {
  const { email } = req.body;

  const user = await userModel.findOne({ email });
  if (user) {
    await userModel.deleteOne(user);
    next();
  } else {
    res.send({
      msg: "user not found",
    });
  }
};

module.exports = {
  userLoginMiddleware,
  userDeleteMiddleware,
  user_jwt_Verification_Middleware,
};
