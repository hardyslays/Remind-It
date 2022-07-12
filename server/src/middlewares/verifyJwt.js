const db = require("../models");
const jwt = require("jsonwebtoken");
const STATUSCODE = require("../helpers/statusCode");

const verifyJwtToken = function (req, res, next) {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded.email;

    const user = db.User.findOne({ email: email });
    if (!user) {
      return res.status(STATUSCODE.UNAUTHORIZE.CODE).json({
        message: STATUSCODE.UNAUTHORIZE.MESSAGE,
      });
    }
    res.locals.username = decoded.name;
    res.locals.email = decoded.email;
  } catch (err) {
    console.log(err);
    res.status(STATUSCODE.INTERNAL_SERVER.CODE).json({
      ...err,
      message: STATUSCODE.INTERNAL_SERVER.MESSAGE,
    });
    return;
  }

  console.log("JWT token verified");
  next();
};

module.exports = verifyJwtToken;
