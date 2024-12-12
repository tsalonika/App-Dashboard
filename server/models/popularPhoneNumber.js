const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app-dashboard",
});

const PopularPhoneNumber = {
  getPopularPhoneNumber: (userId, callback) => {
    db.query(
      "SELECT phonenumber, total FROM popular_phonenumber WHERE user = ?",
      [userId],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
      }
    );
  },
};

module.exports = PopularPhoneNumber;
