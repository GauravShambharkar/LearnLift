const { userModel } = require("../database/db");
const bcrypt = require("bcrypt");

const userLoginMiddleware = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email,
  });

  if (user) {
    let hashPass = await bcrypt.compare(password, user.password);
    if (hashPass) {
      next();
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

module.exports = { userLoginMiddleware, userDeleteMiddleware };
