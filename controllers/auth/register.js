const pool = require("../../db/config");

const register = async (req, res) => {
  // add guest to database
  const { name, surname, status, modified_status } = req.body;

  // add guest query
  const addGuestQuery =
    "INSERT INTO guest (name, surname, status, modified_status) VALUES ($1, $2, $3, $4) RETURNING *";

  const queryValues = [name, surname, status, modified_status];

  // add guest to database
  const guest = await pool.query(addGuestQuery, queryValues);

  // return new guest
  res.json({ newGuest: guest });
};

module.exports = { register };
