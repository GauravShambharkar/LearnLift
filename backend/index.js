const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
// import getPort from "get-port";
const { databaseString } = require("./config");

mongoose.connect(databaseString);

var corsOptions = {
  origin: ["http://localhost:5173"],
  METHODS: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
  Credential: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const { METHODS } = require("node:http");
app.use(cors(corsOptions));
app.use(express.json());

const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const courseRoute = require("./routes/courseRoute");

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
