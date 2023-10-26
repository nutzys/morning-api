const Post = require("../models/post");

exports.createPost = (req, response) => {
  const userId = req.body.userId;
  const title = req.body.title;
  const content = req.body.content;
  const createdAt = req.body.createdAt;
  const imageUrl = req.body.imageUrl;
  Post.create(userId, title, content, createdAt, imageUrl, (err, res) => {
    if (err) {
      response.json({
        error: err,
      });
    } else {
      response.json({
        post: {
          userId: userId,
          title: title,
          content: content,
          createdAt: createdAt,
          imageUrl: imageUrl,
        },
      });
    }
  });
};
