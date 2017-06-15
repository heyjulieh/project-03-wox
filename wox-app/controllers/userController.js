var db = require('../models');

// Shows all users in /api/users route
function index(req, res) {
	db.User.find({}, function(err, allUser){
		res.json(allUser)
	});
};

// Shows one user in /api/users/:userName route
function showOne(req, res) {
	var user = req.params.userName;
	db.User.find({userName:user}, function(err, foundUser) {
		res.json(foundUser);
	});
	console.log('user is:', req.params.userName);
};

module.exports = {
	index: index,
	showOne: showOne
};
