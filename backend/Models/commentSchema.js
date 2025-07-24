const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  comment: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = { commentSchema };
