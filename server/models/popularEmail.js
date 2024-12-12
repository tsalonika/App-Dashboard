const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app-dashboard",
});

const PopularEmail = {
  getPopularEmail: (userId, callback) => {
    db.query(
      "SELECT email, total FROM popular_email WHERE user = ?",
      [userId],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
      }
    );
  },
};

module.exports = PopularEmail;
