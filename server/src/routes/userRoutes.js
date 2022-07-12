const express = require('express');
const Validator = require('../middlewares/validator/userInfoValidator');
const authController = require('../controllers/authController.js');
const { verify } = require('jsonwebtoken');

const Router = express.Router();

Router.get('/userInfo',
    verifyJWT,
    Validator.
    authController.getUserInfo
    ')