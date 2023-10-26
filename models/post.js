const db = require("../util/database");

const Post = {
  create: (userId, title, content, createdAt, imageUrl, callback) => {
    db.query(
      "INSERT INTO posts (user_id, title, content, created_at, image_url) VALUES (?, ?, ?, ?, ?)",
      [userId, title, content, createdAt, imageUrl],
      callback
    );
  },
};

module.exports = Post;
