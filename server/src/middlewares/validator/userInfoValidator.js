const { query } = require("express-validator");

const userInfoValidator = [
    query("email").isEmail().withMessage("Email is not valid"),
];

module.exports = { userInfoValidator };