const express = require("express");

const router = express.Router();

router.use(express.json());

// controller
const { logout } = require("../../controllers/auth/logout");

const { requireAuth } = require("../../middleware/verifyToken");

router.delete("/logout", requireAuth, logout);

module.exports = router;
