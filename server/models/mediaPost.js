const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app-dashboard",
});

const MediaPost = {
  getMediaPost: (userId, callback) => {
    db.query(
      "SELECT url, likes FROM media_post WHERE user = ? ORDER BY likes DESC LIMIT 5",
      [userId],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
      }
    );
  },
};

module.exports = MediaPost;
