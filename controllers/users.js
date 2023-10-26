const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.getUsers = (req, response) => {
  User.getUsers((err, res) => {
    if (err) {
      response.status(500).json({ message: "No users found!" });
    } else {
      response.status(200).json(res);
    }
  });
};

exports.createUser = (req, response) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      console.log(err);
    } else {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          console.log(err);
        } else {
          User.createUser(email, username, hash, (err, res) => {
            if (err) {
              response
                .status(500)
                .json({ message: "Something went wrong!" + err });
            } else {
              response.status(200).json({
                message: "User Created!",
                user: {
                  username: username,
                  email: email,
                  password: hash,
                },
              });
            }
          });
        }
      });
    }
  });
};

exports.loginUser = (req, response) => {
  const email = req.body.email;
  const password = req.body.password;
  User.login(email, (err, res) => {
    bcrypt.compare(password, res[0].password, (error, hres) => {
      if (hres) {
        const respo = {
          id: res[0].id,
          name: res[0].name,
          email: res[0].email,
        };
        const token = jwt.sign(respo, "secret-key", { expiresIn: "1h" });
        response.json({
          token: token,
          user: respo,
        });
      } else {
        response.json({
          error: error,
        });
      }
    });
  });
};
