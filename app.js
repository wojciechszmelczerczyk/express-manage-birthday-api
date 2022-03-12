const express = require("express");

const app = express();

// routes
const register = require("./routes/auth/register");
const auth = require("./routes/auth/auth");
const logout = require("./routes/auth/logout");

const changeStatus = require("./routes/changeStatus");

// verify token middleware
const { requireAuth } = require("./middleware/verifyToken");

const port = process.env.PORT || 3000;

app.put("*", requireAuth);

app.use("/guest", register);
app.use("/guest", auth);
app.use("/guest", logout);
app.use("/guest", changeStatus);

app.listen(port, () => console.log(`Server listening on port:${port}`));
