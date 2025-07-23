const { courseModel } = require("../models/db");

const getAllCourses = async (req, res) => {
  const courses = await courseModel.find();
  res.send({ courses });
};

const getCourseById = async (req, res) => {
  const { id } = req.params;

  const course = await courseModel.findById(id);

  if (course) {
    res.send({ course });
  } else {
    res.send({ msg: "course not found" });
  }
};

module.exports = { getAllCourses, getCourseById };
