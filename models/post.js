const db = require("../util/database");

const Post = {
  create: (userId, title, content, createdAt, callback) => {
    db.query(
      "INSERT INTO posts (user_id, title, content, created_at) VALUES (?, ?, ?, ?)",
      [userId, title, content, createdAt],
      callback
    );
  },
};

module.exports = Post;
