const pool = require("../../db/config");
const createToken = require("../../token/createToken");

const auth = async (req, res) => {
  try {
    // catch name and surname
    const { uuid } = req.body;
    // authorize guest query
    const authGuestQuery = "SELECT * FROM guest WHERE uuid=$1";

    const queryValues = [uuid];

    // get only guest data
    const { rows } = await pool.query(authGuestQuery, queryValues);
    console.log(rows);
    const token = createToken(rows[0].guest_id);
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
