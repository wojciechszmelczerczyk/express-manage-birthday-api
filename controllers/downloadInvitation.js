require("dotenv").config();
const fs = require("fs");
const path = require("path");
const pool = require("../db/config");

// jwt
const jwt = require("jsonwebtoken");

const downloadInvitation = async (req, res) => {
  // get token, extract name and surname
  const token = req.headers.cookie.substring(4);
  const { name, surname } = await jwt.decode(token);

  const guestCredentials = {
    name,
    surname,
  };

  // get birthday data
  const birthday = {
    birthday_date: process.env.BIRTHDAY_DATE,
    birthday_place: process.env.BIRTHDAY_PLACE,
  };

  // get users with accepted status
  const query = "SELECT name,surname FROM guest WHERE status='accepted'";

  // result
  const guestsWhoAccepted = await pool.query(query);

  // create stream
  const stream = fs.createWriteStream(process.env.FILE_NAME, { flags: "a" });

  stream.write("BIRTHDAY PARTY INVITATION\n\n");

  // write guest info in file
  stream.write("You: ");
  for (prop in guestCredentials) {
    stream.write(`${guestCredentials[prop]} `);
  }

  // write participants in file
  stream.write("\n\nAll guests: ");
  guestsWhoAccepted.rows.forEach((num, i) => {
    if (i === 0) {
      stream.write("\n");
    }
    stream.write("- ");
    for (prop in num) {
      stream.write(`${num[prop]} `);
    }
    stream.write(`\n`);
  });

  // birthday party info
  stream.write("\n\n");
  stream.write("Birthday info: \n");

  for (prop in birthday) {
    stream.write(birthday[prop] + "\n");
  }

  stream.end();

  const invitationLink = path.join(__dirname, "/..", process.env.FILE_NAME);

  // download file
  res.download(invitationLink, process.env.FILE_NAME);
};

module.exports = {
  downloadInvitation,
};
