var Messages = require('./messages');
var Walks = require('./walks');
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstName: String,
  lastName: String,
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
  receivedMessages:
  {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }, //reference
  sentMessages:
  {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  walks: [String], //reference and include other items in object
	favoritedWalks: [String],
  verified: Boolean
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
