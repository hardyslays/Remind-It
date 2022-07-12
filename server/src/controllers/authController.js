const { validationResult } = require("express-validator");
const { convertToBcrypt, compareBcrypt } = require("../helpers/encrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const STATUSCODE = require("../helpers/statusCode");

const registerUser = async (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res
      .status(STATUSCODE.VALIDATION.CODE)
      .json({ ...err, message: STATUSCODE.VALIDATION.MESSAGE });
  }

  try {
    console.log("Post: registerUser");
    console.log("name : ", req.body.name);
    console.log("email : ", req.body.email);

    const user = await db.User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(STATUSCODE.BAD_REQUEST.CODE)
        .json({ message: "User with email already exists!" });
    }

    const hashedPass = convertToBcrypt(req.body.password);

    const newUser = new db.User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
    });

    await newUser.save();

    console.log("successfull register");
    return res.status(STATUSCODE.SUCCESS.CODE).json({
      message: STATUSCODE.SUCCESS.MESSAGE,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(STATUSCODE.INTERNAL_SERVER.CODE)
      .json({ error: err.message, message: STATUSCODE.INTERNAL_SERVER.MESSAGE });
  }
};



const loginUser = async (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res
      .status(STATUSCODE.VALIDATION.CODE)
      .json({ ...err, message: STATUSCODE.VALIDATION.MESSAGE });
  }

  try {
    console.log("Post: loginUser");
    console.log("email : ", req.body.email);
    console.log("password : ", req.body.password);

    const user = await db.User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res
        .status(STATUSCODE.VALIDATION.CODE)
        .json({ message: "Invalid email!" });
    }

    const isMatch = compareBcrypt(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(STATUSCODE.VALIDATION.CODE)
        .json({ message: "Invalid password!" });
    }

    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
        user_id: user._id,
        time: Date(),
      },
      process.env.JWT_SECRET
    );
    console.log("token : ", token);
    console.log("successfull login");
    return res.status(STATUSCODE.SUCCESS.CODE).json({
      data: { token: token },
      message: STATUSCODE.SUCCESS.MESSAGE,
    });
  } catch (err) {
    return res
      .status(STATUSCODE.UNAUTHORIZE.CODE)
      .json({ error: err.message, message: STATUSCODE.UNAUTHORIZE.MESSAGE });
  }
};

module.exports = {
  loginUser,
  registerUser,
};
