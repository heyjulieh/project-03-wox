'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessagesSchema = new Schema({
	userSenderID: String, // reference
  userAcceptorID: String,
	title: String,
	content: String,
	date: Date,
  archive: Boolean,
  userSender:
	{
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	userAcceptor:
	{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

var Messages = mongoose.model('Messages', MessagesSchema);

module.exports = Messages;
