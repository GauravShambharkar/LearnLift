const mongoose = require("mongoose");

const { userSchema } = require("./userSchema");
const { adminSchema } = require("./adminSchema");
const { courseSchema } = require("./courseSchema");
const { commentSchema } = require("./commentSchema");
const { notificationSchema } = require("./notificationSchema");

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
