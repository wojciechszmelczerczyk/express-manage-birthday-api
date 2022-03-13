const pool = require("../../db/config");

const listGuestsWhoAccepted = async (req, res) => {
  const query = "SELECT name,surname FROM guest WHERE status='accepted'";
  const guestsWhoAccepted = await pool.query(query);
  res.json(guestsWhoAccepted.rows);
};

const listGuestsWithNoFeedback = async (req, res) => {
  const query = "SELECT name,surname FROM guest WHERE status=null";
  const guestsWithNoFeedback = await pool.query(query);
  res.json(guestsWithNoFeedback.rows);
};

const listGuestsWhoDenied = async (req, res) => {
  const query =
    "SELECT name,surname, modified_status FROM guest WHERE status='denied'";
  const guestsWhoDenied = await pool.query(query);
  res.json(guestsWhoDenied.rows);
};

module.exports = {
  listGuestsWhoAccepted,
  listGuestsWithNoFeedback,
  listGuestsWhoDenied,
};
