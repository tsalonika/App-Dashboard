const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app-dashboard",
});

const AccountSentiment = {
  getAccountSentiment: (userId, callback) => {
    db.query(
      "SELECT * FROM account_sentiment WHERE user = ? LIMIT 1",
      [userId],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
      }
    );
  },
};

module.exports = AccountSentiment;
