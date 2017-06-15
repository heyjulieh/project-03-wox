var db = require('../models');

// Shows all walks in /api/walks route
function index(req, res) {
	db.Walks.find({}, function(err, allWalks){
		res.json(allWalks)
	});
};

// Shows all walks under a specific user
function showWalks(req, res) {
	var user = req.params.userName
	db.Walks.find({userName:user}, function(err, showAllWalks) {
		res.json(showAllWalks);
	});
	console.log('req.params is:', req.params);
};

// Shows a specific walk for a specific user
function showOne(req, res) {
    var walkId = req.params.walkId;
    db.Walks.findById(walkId, function(err, foundWalk) {
        res.json(foundWalk);
    });
};

// Creates a specific walk form-control a specific user
function create(req, res) {
	console.log('req.body: ', req.body)
	console.log('req.body.user is: ', req.body.userName)

		var newWalk = new db.Walks({ //need to edit this
			images: req.body.images,
			userName: req.body.userName,
			location: req.body.location,
			title: req.body.title,
			content: req.body.content,
			dateCreated: req.body.dateCreated,
			userID: req.body.userID
		});
		var user = req.params.userName
		db.Walks.find({userName:user}, function(err, userName) {
			// user returns null. Why? Shouldn't this be a matching db.User object, or at least an ID
			if (err) {

				console.log(err.walk);

			} else if (req.body.userName === null) {

					console.log('walk create error: ${req.body.userName} not found');

			} else {

				db.Walks.create(newWalk, function(err, newCreatedWalk) {

					if (err) {
						console.log('walk save error: ', err);
					} else {
						console.log('new created walk: ', newCreatedWalk);
						res.json(newCreatedWalk);
					}
				});
		}
	});
};

function destroy(req, res) {

	console.log('made it to empty destroy function')

	db.Walks.remove({_id: req.params.walkId}, function (err, foundWalk) {
			if (err)
				res.send(err);
		});
};


// Updates a specific walk in a specific user
function update(req, res) {

	db.Walks.find({user: req.params.userId, _id: req.params.walkId}, function (err, updateWalk) {

		console.log('updateWalk is: ', updateWalk)
		// updateWalk = req.body;

		updateWalk.user = req.body.user;
		updateWalk.userName = req.body.userName;
		updateWalk.images = req.body.images[0];
		updateWalk.title = req.body.title;
		updateWalk.content = req.body.content;
		updateWalk.userId = req.params.userId;

		updateWalk.save(function(err, updatedWalk) {
			if (err) {
				console.log('walk save error: ', err);
			} else {
				console.log('saved walk: ', updatedWalk);
				res.json(updatedWalk);
			}
		});
	});
};

module.exports = {
	index: index,
	showWalks: showWalks,
	create: create,
	showOne: showOne,
	destroy: destroy,
	update: update
}
