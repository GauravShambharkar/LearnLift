const { userModel } = require("../database/db");
const bcrypt = require("bcrypt");

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
      password,
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

  if (user) {
    res.send({
      msg: "login successfully",
    });
  } else {
    res.send({
      msg: "wrong user credential",
    });
  }
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
