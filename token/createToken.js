require("dotenv").config();
const jwt = require("jsonwebtoken");

const maxAge = process.env.JWT_EXPIRATION_TIME;
const secret = process.env.JWT_SECRET;

const createToken = (config) => {
  return jwt.sign(config, secret, {
    expiresIn: maxAge,
  });
};

module.exports = createToken;
