const express = require("express");

const router = express.Router();

router.use(express.json());

// controller
const { logout } = require("../../controllers/auth/logout");

router.delete("/logout", logout);

module.exports = router;
