const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app-dashboard",
});

const PopularMention = {
  getPopularHashtag: (userId, callback) => {
    db.query(
      "SELECT mention, total FROM popular_mention WHERE user = ?",
      [userId],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
      }
    );
  },
};

module.exports = PopularMention;
