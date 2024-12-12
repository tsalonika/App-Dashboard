const PostEngagement = require("../models/postEngagement");

exports.getPostEngagement = (req, res) => {
  const { userId, startDate, endDate } = req.query;

  if (!userId) {
    return res
      .status(400)
      .json({ error: "Username query parameter is required" });
  }

  if (!startDate || !endDate) {
    return res
      .status(400)
      .json({
        error: "Both startDate and endDate query parameters are required",
      });
  }

  const dateRange = { startDate, endDate };

  PostEngagement.getPostEngagement(userId, dateRange, (err, results) => {
    if (err) {
      console.error("Database error: ", err);
      return res.status(500).json({ error: "Database error", details: err });
    }

    if (!results || results.length === 0) {
      return res.status(404).json({ message: "No post engagement data found" });
    }

    res.json(results);
  });
};
