'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WalksSchema = new Schema({
	userCreated: String, // reference
  userCreatedID: String,
  usersFavorited: [String],
  rating: Number,
	title: String,
	content: String,
	dateCreated: Date,
	important: Boolean,
  archive: Boolean,
  private: Boolean,
  user:
	{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

var Walks = mongoose.model('Walks', WalksSchema);

module.exports = Walks;
