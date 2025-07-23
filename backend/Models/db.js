const mongoose = require("mongoose");

const { userSchema } = require("./userModel");
const { adminSchema } = require("./adminModel");
const { courseSchema } = require("./courseModel");
const { commentSchema } = require("./commentModel");
const { notificationSchema } = require("./notificationModel");

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const commentModel = mongoose.model("comment", commentSchema);
const notificationModel = mongoose.model("notification", notificationSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel,
  commentModel,
  notificationModel,
};
