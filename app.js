const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

// db
const pool = require("./db/config");

app.use(express.json());

app.listen(port, () => console.log(`Server listening on port:${port}`));
