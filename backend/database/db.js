const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  userName: String,
  email: String,
});

const adminSchema = new schema({
  adminName: String,
  email: String,
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);

module.exports = {
  userModel,
  adminModel,
};
