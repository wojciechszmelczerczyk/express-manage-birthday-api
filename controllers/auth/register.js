const pool = require("../../db/config");
// generate unique hash value for new guest
const { v4: uuidv4 } = require("uuid");

const register = async (req, res) => {
  // add guest to database
  const { name, surname, status, modified_status, uuid = uuidv4() } = req.body;

  // add guest query
  const addGuestQuery =
    "INSERT INTO guest (name, surname, status, modified_status, uuid) VALUES ($1, $2, $3, $4, $5) RETURNING *";

  const queryValues = [name, surname, status, modified_status, uuid];

  // add guest to database
  const guest = await pool.query(addGuestQuery, queryValues);

  // return id of new guest
  res.json({ copy_uuid: guest.rows[0].uuid });
};

module.exports = { register };
