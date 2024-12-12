const PopularHashtag = require("../models/popularHashtag");

exports.getPopularHashtag = (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res
      .status(400)
      .json({ error: "Username query parameter is required" });
  }

  PopularHashtag.getPopularHashtag(userId, (err, results) => {
    if (err) {
      console.error("Database error: ", err);
      return res.status(500).json({ error: "Database error", details: err });
    }

    if (!results || results.length === 0) {
      return res.status(404).json({ message: "No popular hashtag data found" });
    }

    res.json(results);
  });
};
