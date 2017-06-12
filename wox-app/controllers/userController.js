var db = require('../models');

// Shows all users in /api/users route
function index(req, res) {
	db.User.find({}, function(err, allUser){
		res.json(allUser)
	});
};

// Shows all users
function showUsers(req, res) {
	var userId = req.params.userId;
	db.User.findById(userId, function(err, foundUser) {
		res.json(foundUser);
	});
};

module.exports = {
	index: index,
	showUsers: showUsers
};
