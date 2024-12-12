const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app-dashboard",
});

const PopularKeyword = {
  getPopularKeyword: (userId, callback) => {
    db.query(
      "SELECT keyword, total FROM popular_keyword WHERE user = ?",
      [userId],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
      }
    );
  },
};

module.exports = PopularKeyword;
