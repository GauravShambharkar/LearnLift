const { Router } = require("express");
const userRoute = Router();

const userMiddleware = require("../middleware/userMiddleware");

userRoute.get("/signin", (req, res) => {
  res.send({
    msg: " user Sign in page",
  });
});

userRoute.post("/signup", (req, res) => {
  const { user, email } = req.body;
  res.send({
    msg: "created a new user account",
  });
});

module.exports = userRoute;
