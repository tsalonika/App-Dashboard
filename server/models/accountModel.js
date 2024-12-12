const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app-dashboard",
});

const Account = {
  getByUsername: (username, media, verified, callback) => {
    db.query(
      "SELECT * FROM account WHERE account_username = ? AND media = ? AND verified = ? LIMIT 1",
      [username, media, verified],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results[0]);
      }
    );
  },
};

module.exports = Account;
