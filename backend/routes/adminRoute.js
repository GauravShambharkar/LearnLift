const Router = require("express");
const adminRoute = Router();
const { adminSchema } = require("../Models/db");
const {
  loginAdmin,
  registerAdmin,
  admin_jwtValid,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/adminController");
const {
  adminLoginMiddleware,
  admin_jwt_Verification_Middleware,
  delete_admin_Middeleware,
} = require("../middleware/adminMiddleware");

adminRoute.get("/read", async (req, res) => {
  const adminData = await adminSchema.find();
  res.send({
    adminData: adminData,
  });
});

adminRoute.post("/register", registerAdmin);
adminRoute.post("/login", adminLoginMiddleware, loginAdmin);
adminRoute.post(
  "/login/token",
  admin_jwt_Verification_Middleware,
  admin_jwtValid
);

adminRoute.put("/updateAdmin", updateAdmin);
adminRoute.delete("/deleteAdmin", delete_admin_Middeleware, deleteAdmin);

module.exports = adminRoute;
