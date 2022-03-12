const express = require("express");

const router = express.Router();

router.use(express.json());

// controller
const { auth } = require("../../controllers/auth/auth");

router.post("/auth", auth);

module.exports = router;
