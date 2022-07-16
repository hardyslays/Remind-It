const express = require("express");
const Validator = require("../middlewares/validator/userInfoValidator");
const userController = require("../controllers/userController");
const verifyJwt = require("../middlewares/verifyJwt");

const Router = express.Router();

Router.get(
  "/userInfo",
  verifyJwt,
  Validator.userInfoValidator,
  userController.getUserInfo
);

module.exports = Router;
