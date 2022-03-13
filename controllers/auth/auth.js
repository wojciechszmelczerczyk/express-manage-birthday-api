const pool = require("../../db/config");
const createToken = require("../../token/createToken");
const jwt = require("jsonwebtoken");

const auth = async (req, res) => {
  try {
    // catch name and surname
    const { uuid } = req.body;
    // authorize guest query
    const authGuestQuery = "SELECT * FROM guest WHERE uuid=$1";

    const queryValues = [uuid];

    // get only guest data
    const { rows } = await pool.query(authGuestQuery, queryValues);

    const config = {
      id: rows[0].guest_id,
      name: rows[0].name,
      surname: rows[0].surname,
      isOwner: rows[0].isOwner,
    };

    const token = createToken(config);

    res.cookie("jwt", token, {
      httpOnly: true,
      expiresIn: process.env.JWT_EXPIRATION_TIME * 1000,
    });
    res.json({ jwt: token });
  } catch (err) {
    res.json(err.message);
  }
};

module.exports = { auth };
