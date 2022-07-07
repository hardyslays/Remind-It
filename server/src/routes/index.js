const express = require("express");
const routes = express.Router();
const authRoutes = require("./authRoutes");

routes.use(authRoutes);

module.exports = routes;
