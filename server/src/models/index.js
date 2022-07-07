const mongoose = require('mongoose')
const db = {};
db.mongoose = mongoose;

db.User = require('./userModel');

module.exports = db;