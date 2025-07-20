const Router = require("express");
const { adminModel } = require("../database/db");
const { loginAdmin, registerAdmin, admin_jwtValid } = require("../controllers/adminController");
const { adminLoginMiddleware, admin_jwt_Verification_Middleware } = require("../middleware/adminMiddleware");
const { jwtValid } = require("../controllers/userController");
const adminRoute = Router();

adminRoute.get("/read", async (req, res) => {
  const adminData = await adminModel.find();
  res.send({
    adminData,
  });
});

adminRoute.post("/register", registerAdmin);
adminRoute.post("/login", adminLoginMiddleware, loginAdmin);
adminRoute.post("/login/token", admin_jwt_Verification_Middleware, admin_jwtValid);

module.exports = adminRoute;
