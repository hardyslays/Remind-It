const express = require("express");
const routes = express.Router();
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");

routes.use(authRoutes); // auth routes :  /register /login
routes.use(userRoutes); // user routes :  /userInfo

module.exports = routes;
