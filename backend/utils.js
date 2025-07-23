const jwt = require("jsonwebtoken");
const { user_jwt_secret, admin_jwt_secret } = require("./config");

const generateUserToken = (payload) => {
  return jwt.sign(payload, user_jwt_secret, { expiresIn });
};

const verifyUserToken = (token) => {
  try {
    return jwt.verify(token, user_jwt_secret);
  } catch (error) {
    return null;
  }
};

const generateAdminToken = (payload) => {
  return jwt.sign(payload, admin_jwt_secret);
};

const verifyAdminToken = (token) => {
  try {
    return jwt.verify(token, admin_jwt_secret);
  } catch (error) {
    return null;
  }
};

module.exports = {
  generateUserToken,
  verifyUserToken,
  generateAdminToken,
  verifyAdminToken,
};
