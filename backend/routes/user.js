const Router = require("express");
const userRoute = Router();

userRoute.get("/user", (req, res) => {
  res.send({
    msg: "at user route",
  });
});

userRoute.post("/user", (req, res) => {
  const { user, email } = req.body;
  res.send({
    msg: "posting from user route",
  });
});

module.exports = userRoute;
