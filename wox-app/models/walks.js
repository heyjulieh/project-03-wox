'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WalksSchema = new Schema({
	user: String, // reference
  userCreatedID: String,
  usersFavorited: [String], //reference
  rating: Number,
	title: String,
	content: String,
	location: String,
	dateCreated: Date,
	important: Boolean,
  archive: Boolean,
  private: Boolean,
	images: [String],
  user:
	{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});
});

var Walks = mongoose.model('Walks', WalksSchema);

module.exports = Walks;
