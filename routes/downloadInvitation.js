const express = require("express");

const router = express.Router();

router.use(express.json());

// controller
const { downloadInvitation } = require("../controllers/downloadInvitation");

const { requireAuth } = require("../middleware/verifyToken");

router.get("/download-invitation", requireAuth, downloadInvitation);

module.exports = router;
