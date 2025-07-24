const jwt = require("jsonwebtoken");
const { user_jwt_secret, admin_jwt_secret } = require("./config");

const generate_UserToken = (payload) => {
  return jwt.sign(payload, user_jwt_secret);
};

const verify_UserToken = (token) => {
  try {
    return jwt.verify(token, user_jwt_secret);
  } catch (error) {
    return null;
  }
};

const generate_AdminToken = (payload) => {
  return jwt.sign(payload, admin_jwt_secret);
};

const verify_AdminToken = (token) => {
  try {
    return jwt.verify(token, admin_jwt_secret);
  } catch (error) {
    return null;
  }
};

module.exports = {
  generate_UserToken,
  verify_UserToken,
  generate_AdminToken,
  verify_AdminToken,
};
