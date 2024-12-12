const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app-dashboard",
});

const PostEngagement = {
  getPostEngagement: (userId, dateRange, callback) => {
    db.query(
      "SELECT * FROM post_performance WHERE user = ? AND date BETWEEN ? AND ?",
      [userId, dateRange.startDate, dateRange.endDate],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
      }
    );
  },
};

module.exports = PostEngagement;
