var db = require('../models');

// Shows all messages in /api/messages route
function index(req, res) {
	db.Messages.find({}, function(err, allMessages){
		res.json(allMessages)
	});
};

// Shows all messages accepted under a specific user
function showMessagesAccepted(req, res) {
	var userAcceptor = req.params.userAcceptorId
	db.Messages.find({userAcceptor}, function(err, showAllMessagesAccepted) {
		res.json(showAllMessagesAccepted);
	});
};

// Shows all messages accepted under a specific user
function showMessagesSent(req, res) {
	var userSender = req.params.userSenderId
	db.Messages.find({userSender}, function(err, showAllMessagesSent) {
		res.json(showAllMessagesSent);
	});
};

// Shows a specific message for a specific user
function showOne(req, res) {
    var messageId = req.params.messageId;
    db.Messages.findById(messageId, function(err, foundMessage) {
        res.json(foundMessage);
    });
};

// Creates a specific message for a specific user
function create(req, res) {
	console.log('req.body: ', req.body)
	console.log('req.body.userSender is: ', req.body.userSender)

		var newMessage = new db.Messages({ //need to edit this
			userSender: req.body.userSender,
      userAcceptor: req.body.userAccepter,
			title: req.body.title,
			content: req.body.content,
			date: req.body.date,
			userSenderID: req.body.userSenderID,
      userAcceptorID: req.body.userAcceptorID
		});

		db.UserSender.findOne({user: req.body.userSender}, function(err, user) {

			// user returns null. Why? Shouldn't this be a matching db.User object, or at least an ID

			if (err) {

				console.log(err.message);

			} else if (req.body.userSender === null) {

					console.log('message create error: ${req.body.userSender} not found');

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
		});
};



module.exports = {
	index: index,
	showMessagesSent: showMessagesSent,
  showMessagesAccepted: showMessagesAccepted,
	create: create,
	showOne: showOne,
	destroy: destroy,
}
