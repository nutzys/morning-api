const express = require("express");

const userController = require("../controllers/users");
const postController = require("../controllers/posts");

const router = express.Router();

//User Controllers
router.get("/users", userController.getUsers);
router.post("/user", userController.createUser);
router.post("/login", userController.loginUser);

//Post Controllers
router.post("post", postController.createPost);

module.exports = router;
