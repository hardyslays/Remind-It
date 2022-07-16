const { validationResult } = require("express-validator");
const  STATUSCODE  = require("../helpers/statusCode");
const db = require("../models");

const getUserInfo = async (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res
      .status(STATUSCODE.VALIDATION.CODE)
      .json({ ...err, message: STATUSCODE.VALIDATION.MESSAGE });
  }

  try {
    console.log("Get: getUserInfo");
    const email = req.query.email;
    console.log(email);

    const user = await db.User.findOne({ email: email });
    if (!user) {
      return res
        .status(STATUSCODE.BAD_REQUEST.CODE)
        .json({ message: "User with email does not exists!" });
    }
    console.log(user);
    const data = {
      "_id" : user._id,
      "name" : user.name,
      "status" : user.email,
      "email" : user.status
    }
    

    return res.status(STATUSCODE.SUCCESS.CODE).json({
      data: data,
      message: STATUSCODE.SUCCESS.MESSAGE,
    });
  } catch (err) {
    console.log(err);
    return res.status(STATUSCODE.INTERNAL_SERVER.CODE).json({
      error: err.message,
      message: STATUSCODE.INTERNAL_SERVER.MESSAGE,
    });
  }
};

module.exports = {
  getUserInfo,
};
