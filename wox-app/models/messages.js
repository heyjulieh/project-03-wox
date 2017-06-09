'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessagesSchema = new Schema({
	userSenderID: String, // reference
  userAcceptorID: String,
  userNameSender: String,
  userNameAcceptor: String,
	title: String,
	content: String,
	date: Date,
	important: Boolean,
  archive: String
  user:
	{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

var Messages = mongoose.model('Messages', MessagesSchema);

module.exports = Messages;
