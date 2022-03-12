const express = require("express");

const router = express.Router();

router.use(express.json());

// controller
const { register } = require("../../controllers/auth/register");

router.post("/register", register);

module.exports = router;
