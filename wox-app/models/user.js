var Messages = require('./messages');
var Walks = require('./walks');
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	user: String,
  userName: String,
  password: String,
  email: String,
  phoneNumber: String,
  location: String,
  hometown: String,
	imgURL: String,
  birthday: Date,
	gender: String,
  status: String,
  interestedIn: String,
  blurb: String,
  mesages: [String], //reference
  walks: [String], //reference and include other items in object
	favoritedWalks: [String],
  verified: Boolean
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
