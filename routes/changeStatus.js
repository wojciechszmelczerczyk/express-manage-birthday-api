const express = require("express");

const router = express.Router();

router.use(express.json());

// controller
const { changeStatus } = require("../controllers/changeStatus");

const { requireAuth } = require("../middleware/verifyToken");

router.put("/change-status", requireAuth, changeStatus);

module.exports = router;
