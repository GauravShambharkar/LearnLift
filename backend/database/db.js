const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const adminSchema = new schema({
  name: String,
  email: String,
  password: String,
});

const courseSchema = new schema({
  title: String,
  creator: String,
  price: Number,
  likes: String,
  comments: String,
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel,
};
