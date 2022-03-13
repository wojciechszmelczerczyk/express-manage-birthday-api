const express = require("express");

const app = express();

// routes
const register = require("./routes/auth/register");
const auth = require("./routes/auth/auth");
const logout = require("./routes/auth/logout");

const changeStatus = require("./routes/changeStatus");
const downloadInvitation = require("./routes/downloadInvitation");

// verify token middleware
const { requireAuth } = require("./middleware/verifyToken");

const port = process.env.PORT || 3000;

app.get("*", requireAuth);
app.put("*", requireAuth);
app.delete("*", requireAuth);

app.use("/guest", register);
app.use("/guest", auth);
app.use("/guest", logout);
app.use("/guest", changeStatus);
app.use("/guest", downloadInvitation);

app.listen(port, () => console.log(`Server listening on port:${port}`));
