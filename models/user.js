const db = require("../util/database");

const User = {
  getUserByEmail: (email, callback) => {
    db.query(`SELECT * FROM users WHERE id = (?)`, [email], callback);
  },
  createUser: (email, username, hash, callback) => {
    db.query(
      "INSERT INTO users (email, name, password) VALUES (?, ?, ?)",
      [email, username, hash],
      callback
    );
  },
  login: (email, callback) => {
    db.query("SELECT * FROM users WHERE email = (?)", [email], callback);
  },
};

module.exports = User;
