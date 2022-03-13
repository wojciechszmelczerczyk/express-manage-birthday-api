const express = require("express");

const router = express.Router();

const { requireAuth } = require("../../middleware/verifyToken");
const { verifyOwner } = require("../../middleware/verifyOwner");

const {
  listGuestsWhoAccepted,
  listGuestsWithNoFeedback,
  listGuestsWhoDenied,
} = require("../../controllers/admin/listGuests");

router.get("/accepted", [requireAuth, verifyOwner], listGuestsWhoAccepted);

router.get(
  "/no-feedback",
  [requireAuth, verifyOwner],
  listGuestsWithNoFeedback
);

router.get("/denied", [requireAuth, verifyOwner], listGuestsWhoDenied);

module.exports = router;
