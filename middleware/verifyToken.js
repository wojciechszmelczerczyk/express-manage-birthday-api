require("dotenv").config();
const { verify } = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  // intercept token from request
  const token = req.headers.cookie.substring(4);

  if (token) {
    verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.send("token is invalid");
      } else {
        next();
      }
    });
  } else {
    res.send("token doesn't exists");
  }
};

module.exports = {
  requireAuth,
};
