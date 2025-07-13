const Router = require("express");
const adminRoute = Router();

adminRoute.get("/signin", (req, res) => {
  res.send({
    message: "admin Sign in page",
  });
});

adminRoute.post("/signup", (req, res) => {
  res.send({
    message: "created a new admin account",
  });
});

module.exports = adminRoute;
