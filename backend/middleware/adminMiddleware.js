const { admin_jwt_secret } = require("../config");
const { adminModel } = require("../database/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const adminLoginMiddleware = async (req, res, next) => {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({ email });
  const validPass = await bcrypt.verify(password, admin.password);
  if (admin) {
    if (validPass) {
      res.send({
        msg: "login successfull",
      });
    } else {
      res.send({ msg: "Invalid password" });
    }
  } else {
    res.status(401).send({
      msg: "invalid email",
    });
  }
};

const admin_jwt_Verification_Middleware = async (req, res, next) => {
  const token = req.body.token;

  const validToken = await jwt.verify(token, admin_jwt_secret);
  if (validToken) {
    next();
  } else {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { adminLoginMiddleware, admin_jwt_Verification_Middleware };
