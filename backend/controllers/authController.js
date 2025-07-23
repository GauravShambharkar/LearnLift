const { userModel } = require("../models/db");

const authenticateUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email, password });

  if (user) {
    res.send({ msg: "authenticated", user });
  } else {
    res.send({ msg: "authentication failed" });
  }
};

module.exports = authenticateUser;
