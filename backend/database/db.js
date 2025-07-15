const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  name: String,
  email: String,
});

const adminSchema = new schema({
  name: String,
  email: String,
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);

module.exports = {
  userModel,
  adminModel,
};
