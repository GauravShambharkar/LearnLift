const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const getport = require("get-port");
// const {databaseString} = require('./config')

// mongoose.connect(databaseString);
app.use(express.json());
app.use(cors());

const userRoute = require("./routes/user");
const adminRoute = require("./routes/admin");

app.use("/user", userRoute);
app.use("/admin", adminRoute);

(async () => {
  const port = await getport({ port: process.env.port || 3000 });
  app.listen(port, () => {
    console.log("server running successfully");
  });
})();
