const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
// import getPort from "get-port";
const { databaseString } = require("./config");

mongoose.connect(databaseString);
app.use(express.json());
app.use(cors());

const userRoute = require("./routes/user");
const adminRoute = require("./routes/admin");
const courseRoute = require("./routes/course");

app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.use("/course", courseRoute);

// (async () => {
//   const port = await getPort({ port: process.env.port || 3000 });
//   app.listen(port, () => {
//     console.log(`server is running on port ${port}`);
//   });
// })();

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log("server running successfully");
});
