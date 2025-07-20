const router = require("express");
const adminRoute = router();
// admin route

const adminRoute = require("./admin");

adminRoute.get("/read");
adminRoute.post("/register");
adminRoute.post("/login");
