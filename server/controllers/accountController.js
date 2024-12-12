const Account = require("../models/accountModel");

exports.getDataByUsername = (req, res) => {
  const { username, media, verified } = req.query;

  if (!username) {
    return res
      .status(400)
      .json({ error: "Username query parameter is required" });
  }

  if (!media) {
    return res
      .status(400)
      .json({ error: "Media selection parameter is required" });
  }

  Account.getByUsername(username, media, verified, (err, result) => {
    if (err)
      return res.status(500).json({ error: "Database error", details: err });
    if (!result) return res.status(404).json({ message: "User not found" });
    res.json(result);
  });
};
