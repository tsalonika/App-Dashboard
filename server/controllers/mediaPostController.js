const MediaPost = require("../models/mediaPost");

exports.getMediaPost = (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res
      .status(400)
      .json({ error: "UserID query parameter is required" });
  }

  MediaPost.getMediaPost(userId, (err, result) => {
    if (err)
      return res.status(500).json({ error: "Database error", details: err });
    if (!result) return res.status(404).json({ message: "User not found" });
    res.json(result);
  });
};
