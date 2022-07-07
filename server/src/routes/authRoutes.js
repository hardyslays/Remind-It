const express = require('express');
const Validator = require('../middlewares/validator/authValidator');
const authController = require('../controllers/authController.js');

const Router = express.Router();

Router.post(
    '/login',
    Validator.authLoginCheckCredentials,
    authController.loginUser
)

Router.post(
    '/register',
    Validator.authRegisterCheckCredentials,
    authController.registerUser
)


module.exports = Router;