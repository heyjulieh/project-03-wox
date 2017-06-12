'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WalksSchema = new Schema({
  userCreatedID: String,
  usersFavorited: [String], //reference
  rating: Number,
	title: String,
	content: String,
	location: String,
	dateCreated: Date,
	important: String,
  archive: Boolean,
  private: Boolean,
	images: [String],
  userName: String,
  user:
	{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

var Walks = mongoose.model('Walks', WalksSchema);

module.exports = Walks;
