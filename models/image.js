const db = require("../util/database");

const Post = {
  create: (post_id, image_url, callback) => {
    db.query(
      "INSERT INTO images (post_id, image_url) VALUES (?, ?)",
      [post_id, image_url],
      callback
    );
  },
};

module.exports = Post;
