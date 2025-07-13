const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect();


const userRoute = require("./routes/user");
const adminRoute = require("./routes/admin");

app.use("/user", userRoute);
app.use("/admin", adminRoute);

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log("server running successfully");
});
