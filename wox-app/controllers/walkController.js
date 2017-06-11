var db = require('../models');

// Shows all walks in /api/walks route
function index(req, res) {
	db.Walk.find({}, function(err, allWalks){
		res.json(allWalks)
	});
};

// Shows all walks
function showWalks(req, res) {
	var walkId = req.params.walkId;
	db.Walk.findById(walkId, function(err, foundWalk) {
		res.json(foundWalk);
	});
};
