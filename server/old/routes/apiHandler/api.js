const express = require("express");
const router = express.Router();
const User = require("../../models/user.model");
const jwt = require("jsonwebtoken");

//Middlewares
const verifyJwtToken = function (req, res, next) {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded.email;

    const user = User.findOne({ email: email });
    if (!user) {
      return res.json({
        status: "error",
        msg: "invalid token",
      });
    } else {
      res.locals.username = decoded.name;
    }
  } catch (err) {
    console.log(err);
    res.json({
      status: "error",
      error: "network error",
    });
    return;
  }

  console.log("JWT token verified");
  next();
};

router.use(verifyJwtToken);

router.route("/username").get((req, res) => {
  res.json({
    status: "ok",
    username: res.locals.username,
  });
});

module.exports = router;
