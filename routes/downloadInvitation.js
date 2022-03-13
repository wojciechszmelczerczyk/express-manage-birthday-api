const express = require("express");

const router = express.Router();

router.use(express.json());

// controller
const { downloadInvitation } = require("../controllers/downloadInvitation");

router.get("/download-invitation", downloadInvitation);

module.exports = router;
