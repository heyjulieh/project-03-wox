var db = require('../models');

// Shows all messages in /api/messages route
function index(req, res) {
	db.Messages.find({}, function(err, allMessages){
		res.json(allMessages)
	});
};

// Shows all messages under a specific user
function showAllMessages(req, res) {
	var user = req.params.userName
	db.Messages.find({userName:user}, function(err, showAllMessages) {
		res.json(showAllMessages);
	});
	console.log('req.params is:', req.params);
};

// Shows a specific message for a specific user
function showOne(req, res) {
    var messageId = req.params.messageId;
    db.Messages.findById(messageId, function(err, foundMessage) {
        res.json(foundMessage);
    });
};

// Creates a specific message form-control a specific user
function create(req, res) {
	console.log('req.body: ', req.body)
	console.log('req.body.user is: ', req.body.userName)

		var newMessage = new db.Messages({ //need to edit this
			images: req.body.images,
			userName: req.body.userName,
			location: req.body.location,
			title: req.body.title,
			content: req.body.content,
			dateCreated: req.body.dateCreated,
			userID: req.body.userID
		});
		var user = req.params.userName
		db.Messages.find({userName:user}, function(err, userName) {
			// user returns null. Why? Shouldn't this be a matching db.User object, or at least an ID
			if (err) {

				console.log(err.message);

			} else if (req.body.userName === null) {

					console.log('message create error: ${req.body.userName} not found');

			} else {

				db.Messages.create(newMessage, function(err, newCreatedMessage) {

					if (err) {
						console.log('message save error: ', err);
					} else {
						console.log('new created message: ', newCreatedMessage);
						res.json(newCreatedMessage);
					}
				});
		}
	});
};

function destroy(req, res) {

	console.log('made it to empty destroy function')

	db.Messages.remove({_id: req.params.messageId}, function (err, foundMessage) {
			if (err)
				res.send(err);
				console.log(req.params.messageId)
		});
};


// Updates a specific message in a specific user
function update(req, res) {

	db.Messages.find({user: req.params.userId, _id: req.params.messageId}, function (err, updateMessage) {

		console.log('updateMessage is: ', updateMessage)
		// updateMessage = req.body;

		updateMessage.user = req.body.user;
		updateMessage.userName = req.body.userName;
		updateMessage.images = req.body.images[0];
		updateMessage.title = req.body.title;
		updateMessage.content = req.body.content;
		updateMessage.userId = req.params.userId;

		updateMessage.save(function(err, updatedMessage) {
			if (err) {
				console.log('message save error: ', err);
			} else {
				console.log('saved message: ', updatedMessage);
				res.json(updatedMessage);
			}
		});
	});
};

module.exports = {
	index: index,
	showAllMessages: showAllMessages,
	create: create,
	showOne: showOne,
	destroy: destroy,
	update: update
}
