var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/project-3");
var User = require('./user');
var Messages = require('./messages');
var Walks = require('./walks');

module.exports.User = require('./user');
module.exports.Messages = require('./messages');
module.exports.Walks = require('./walks');
