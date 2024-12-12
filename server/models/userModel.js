const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app-dashboard",
});

const User = {
  getAll: (callback) => {
    db.query("SELECT * FROM users", callback);
  },
  create: (newUser, callback) => {
    db.query("INSERT INTO users SET ?", newUser, callback);
  },
  getById: (id, callback) => {
    db.query("SELECT * FROM users WHERE id = ?", [id], callback);
  },
  update: (id, updatedUser, callback) => {
    db.query("UPDATE users SET ? WHERE id = ?", [updatedUser, id], callback);
  },
  delete: (id, callback) => {
    db.query("DELETE FROM users WHERE id = ?", [id], callback);
  },
};

module.exports = User;
