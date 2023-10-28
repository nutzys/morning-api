const Image = require("../models/image");

exports.createImage = (req, response) => {
  const postId = req.body.postId;
  const imageUrls = req.files;
  Image.create(postId, imageUrls, (request, res, err) => {
    if (!err) {
      response.json({
        message: "Image Uploaded!",
        imageUrls,
      });
    } else {
      response.json({
        error: err,
      });
    }
  });
};
