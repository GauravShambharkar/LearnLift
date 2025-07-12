const Router = require("express");
const adminRoute = Router();

adminRoute.get("admin", (req, res) => {
  res.send({
    message: "Welcome to admin page",
  });
});

adminRoute.post("admin", (req, res) => {
  res.send({
    message: "Welcome to admin page",
  });
});

module.exports = adminRoute;
