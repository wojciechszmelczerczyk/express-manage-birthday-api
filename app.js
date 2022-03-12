const express = require("express");

const app = express();

// register route
const register = require("./routes/auth/register");
const auth = require("./routes/auth/auth");
const changeStatus = require("./routes/changeStatus");

const port = process.env.PORT || 3000;

app.use("/guest", register);
app.use("/guest", auth);
app.use("/guest", changeStatus);

app.listen(port, () => console.log(`Server listening on port:${port}`));
