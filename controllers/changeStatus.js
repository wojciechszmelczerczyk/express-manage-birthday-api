const jwt = require("jsonwebtoken");
const pool = require("../db/config");

const changeStatus = async (req, res) => {
  // intercept status
  const status = req.body.status;

  // intercept jwt from cookie
  const token = req.headers.cookie.substring(4);

  // decode token to get id of currently logged in guest
  const { id, modified_status = new Date() } = jwt.decode(token);

  // get currently logged in guest query
  const currentGuestQuery = "SELECT * FROM guest WHERE guest_id=$1";

  // query parameter
  const queryValue = [id];

  // current guest
  const currentGuest = await pool.query(currentGuestQuery, queryValue);

  // update currently logged in guest status
  const updateGuestStatusQuery =
    "UPDATE guest SET status=$1, modified_status=$2 WHERE guest_id=$3";

  // query parameter
  const queryVal = [status, modified_status, currentGuest.rows[0].guest_id];

  const updatedStatus = await pool.query(updateGuestStatusQuery, queryVal);

  res.json("status updated");
};

module.exports = {
  changeStatus,
};
