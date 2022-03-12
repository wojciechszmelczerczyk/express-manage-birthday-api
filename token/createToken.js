require("dotenv").config();
const jwt = require("jsonwebtoken");

const maxAge = process.env.JWT_EXPIRATION_TIME;
const secret = process.env.JWT_SECRET;

const createToken = (id) => {
  return jwt.sign({ id }, secret, {
    expiresIn: maxAge,
  });
};

module.exports = createToken;
