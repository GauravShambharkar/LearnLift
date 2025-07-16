const { courseModel } = require("../database/db");

const createCourse = async (req, res) => {
  const { title, description, demos, price, creatorEmail } = req.body;

  const newCourse = await courseModel.create({
    title,
    description,
    demos,
    price,
    creatorEmail,
  });

  res.send({ msg: "course created successfully", newCourse });
};

const scheduleZoomDemo = async (req, res) => {
  const { courseId, zoomLink, dateTime } = req.body;

  const course = await courseModel.findById(courseId);

  if (course) {
    course.zoomSessions.push({ zoomLink, dateTime });
    await course.save();
    res.send({ msg: "zoom demo scheduled", course });
  } else {
    res.send({ msg: "course not found" });
  }
};

module.exports = { createCourse, scheduleZoomDemo };
