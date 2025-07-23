const { courseModel, adminModel } = require("../Models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { admin_jwt_secret } = require("../config");

const registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  await adminModel.create({
    name,
    email,
    password: await bcrypt.hash(password, 10),
  });

  res.send({
    message: "Admin created successfully",
  });
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({ email });
  if (admin) {
    const validAdmin = await bcrypt.compare(password, admin.password);
    if (validAdmin) {
      const token = await jwt.sign({ id: admin._id }, admin_jwt_secret);
      res.send({
        token: token,
      });
    } else {
      res.status(401).send({
        message: "Invalid password",
      });
    }
  } else {
    res.status(401).send({
      message: "Invalid email",
    });
  }
};

const admin_jwtValid = (req, res) => {
  res.send({
    msg: "Token is valid",
  });
};

const updateAdmin = async (req, res) => {
  const { New_name, New_email } = req.body;

  const user = await adminModel.findOne({ email });
  if (user) {
    const updated_Admin = await userModel.findOneAndUpdate(
      { email },
      { name: New_name, email: New_email },
      { new: true }
    );
    res.send(updated_Admin);
  } else {
    res.send({
      msg: "admin not found",
    });
  }
};

const deleteAdmin = async (req, res) => {
  res.send({
    msg: "Admin deleted successfully",
  });
};

// const createCourse = async (req, res) => {
//   const { title, description, demos, price, creatorEmail } = req.body;

//   const newCourse = await courseModel.create({
//     title,
//     description,
//     demos,
//     price,
//     creatorEmail,
//   });

//   res.send({ msg: "course created successfully", newCourse });
// };

// const scheduleZoomDemo = async (req, res) => {
//   const { courseId, zoomLink, dateTime } = req.body;

//   const course = await courseModel.findById(courseId);

//   if (course) {
//     course.zoomSessions.push({ zoomLink, dateTime });
//     await course.save();
//     res.send({ msg: "zoom demo scheduled", course });
//   } else {
//     res.send({ msg: "course not found" });
//   }
// };

module.exports = {
  registerAdmin,
  loginAdmin,
  admin_jwtValid,
  updateAdmin,
  deleteAdmin,
};
