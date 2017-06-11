var Messages = require('./messages');
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
		ref: 'Message'
    ref: 'User'
  } //reference
  sentMessages:
  {
    type: Schema.Types.ObjectId,
    ref: 'Message'
    ref: 'User'
  }
  walks: [String], //reference and include other items in object
  verified: Boolean

});

var User = mongoose.model('User', UserSchema);

module.exports = User;
