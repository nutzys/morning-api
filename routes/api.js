const express = require("express");
const multer = require("multer");

const userController = require("../controllers/users");
const postController = require("../controllers/posts");
const imageController = require("../controllers/images");
const verifyToken = require("../middlewares/auth");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/", // Destination folder for storing images
  filename: function (req, file, callback) {
    // Define how the file should be named
    callback(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

//User Controllers
router.get("/users", userController.getUsers);
router.post("/user", userController.createUser);
router.post("/login", userController.loginUser);

//Post Controllers
router.post("/post", verifyToken, postController.createPost);

//Image Controllers
router.post(
  "/upload",
  verifyToken,
  upload.array("image", 2),
  imageController.createImage
);

module.exports = router;
