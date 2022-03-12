const logout = (req, res) => {
  res.cookie("jwt", "", {
    maxAge: 1,
  });
  res.send("jwt deleted");
};

module.exports = { logout };
