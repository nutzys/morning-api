const Post = require("../models/post");

exports.createPost = (req, response) => {
  const title = req.body.title;
  const content = req.body.content;
  const createdAt = req.body.created_at;
  Post.create(req.user.id, title, content, createdAt, (err, res) => {
    if (err) {
      response.json({
        error: err,
      });
    } else {
      response.json({
        posts: {
          id: res.insertId,
          userId: req.user.id,
          title: title,
          content: content,
          createdAt: createdAt,
        },
      });
    }
  });
};
