const { body } = require("express-validator");

const authLoginCheckCredentials = [
  body("email")
    .isLength({ min: 1 })
    .contains("@")
    .withMessage("email should not be empty!"),
  body("password")
    .isLength({ min: 1 })
    .withMessage("Password should not be empty!"),
];

const authRegisterCheckCredentials = [
  body("name")
    .isLength({ min: 1 })
    .withMessage("name should not be empty!"),
  body("email")
    .isLength({ min: 1 })
    .contains("@")
    .withMessage("enter valid email!"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password should not be empty!"),
]

module.exports = {
    authLoginCheckCredentials,
    authRegisterCheckCredentials
};
