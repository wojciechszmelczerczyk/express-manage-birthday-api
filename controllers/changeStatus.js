require("dotenv").config();
const jwt = require("jsonwebtoken");
const pool = require("../db/config");

const changeStatus = async (req, res) => {
  // intercept status
  const status = req.body.status;

  if (status !== "accepted" && status !== "denied") {
    res.json({ wrong_status_provided: status });
  } else {
    const modified_status = new Date();

    const offsetInMiliseconds = 18000000;
    if (
      modified_status.getTime() >
      new Date(process.env.BIRTHDAY_DATE).getTime() - offsetInMiliseconds
    ) {
      res.json({
        party_date: process.env.BIRTHDAY_DATE,
        your_invitation_change: modified_status,
      });
    } else {
      // intercept jwt from cookie
      const token = req.headers.cookie.substring(4);

      // decode token to get id of currently logged in guest
      const { id } = jwt.decode(token);

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

      // execute query
      await pool.query(updateGuestStatusQuery, queryVal);

      // get updated status
      const getUpdatedStatus = await pool.query(currentGuestQuery, queryValue);

      res.json({ status_updated_to: getUpdatedStatus.rows[0].status });
    }
  }
};

module.exports = {
  changeStatus,
};
