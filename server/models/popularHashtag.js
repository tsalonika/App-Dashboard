const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app-dashboard",
});

const PopularHashtag = {
  getPopularHashtag: (userId, callback) => {
    db.query(
      "SELECT hashtag, total FROM popular_hashtag WHERE user = ?",
      [userId],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
      }
    );
  },
};

module.exports = PopularHashtag;
