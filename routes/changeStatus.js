const express = require("express");

const router = express.Router();

router.use(express.json());

// controller
const { changeStatus } = require("../controllers/changeStatus");

router.put("/change-status", changeStatus);

module.exports = router;
