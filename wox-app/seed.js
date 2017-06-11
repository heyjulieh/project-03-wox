var db = require('./models');

var walks_list = [
	{
		name: 'San Francisco',
		imgURL: '/images/walks/sanfrancisco.jpg',
		type: 'largeCard'
	},
	{
		name: 'Dubai',
		imgURL: '/images/walks/dubai.jpg',
		type: 'mediumCard'
	},
	{
		name: 'Reykjavik',
		imgURL: '/images/walks/reykjavik.jpg',
		type: 'smallCard'
	},
	{
		name: 'Tokyo',
		imgURL: '/images/walks/tokyo.jpg',
		type: 'smallCard'
	},
	{
		name: 'Amsterdam',
		imgURL: '/images/walks/amsterdam.jpg',
		type: 'smallCard'
	},
	{
		name: 'Oslo',
		imgURL: '/images/walks/iceland.jpg',
		type: 'smallCard'
	}
];

var messages_list = [
	{
		userIMG: '/images/profiles/face1.jpg',
		user: 'Anthony L.',
		user: 'San Francisco',
		title: 'Home is Where the Sandwich is',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		date: '5/10/2017'
	},
	{
		userIMG: '/images/profiles/face2.jpg',
		user: 'George C.',
		user: 'San Francisco',
		title: 'Nowhere Man',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		date: '1/2/2014'
	},
	{
		userIMG: '/images/profiles/face3.jpg',
		user: 'George C.',
		user: 'San Francisco',
		title: 'Nowhere Man',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		date: '1/2/2014'
	},
	{
		userIMG: '/images/profiles/face4.jpg',
		user: 'George C.',
		city: 'San Francisco',
		title: 'Nowhere Man',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		date: '1/2/2014'
	},
	{
		userIMG: '/images/profiles/face5.jpg',
		user: 'Violet',
		city: 'Dubai',
		title: 'Words from a Local',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		date: '5/10/2017'
	},
	{
		userIMG: '/images/profiles/face6.jpg',
		user: 'Blair',
		city: 'Reykjavik',
		title: 'Really Cool Vibes, Man.',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		date: '5/10/2017'
	},
	{
		userIMG: '/images/profiles/face7.jpg',
		user: 'Emma Frost',
		city: 'Tokyo',

		title: 'I Want To Hold My Hand',
		text: 'COLD COLD COLD, but the hot springs are a must see.',
		date: '4/10/2016'
	},
	{
		userIMG: '/images/profiles/face8.jpg',
		user: 'Julie Huang',
		city: 'Tokyo',
		title: 'I Want To Hold My Hand',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		date: '4/10/2016'
	},
	{
		userIMG: '/images/profiles/face9.jpg',
		user: 'Mahmoud Bachir',
		city: 'Amsterdam',
		title: 'Lucy In The Sky With Diamonds',
		text: 'Ramen was so bomb!',
		date: '3/25/2017'
	}
];

db.Walk.remove({}, function(err, walks) {
console.log('removed all walks');
	db.Walk.create(walks_list, function(err, walks) {
		if (err) {
			console.log(err);
			return;
		}

		db.Message.remove({}, function(err, messages) {
			console.log('removed all messages')

			messages_list.forEach(function(messageInfo) {
				var message = new db.Message({
					userIMG: messageInfo.userIMG,
					user: messageInfo.user,
					cityName: messageInfo.user,
					title: messageInfo.title,
					text: messageInfo.text,
					date: messageInfo.date,
					userID: messageInfo.userID
				});
				db.Walk.findOne({name: messageInfo.user}, function(err, foundWalk) {
					if(err) {
						console.log(err);
						return;
					}
					message.user = foundWalk;
					message.save(function(err, savedMessage) {
						if(err) {
							return console.log(err);
						}
						console.log('saved ', savedMessage);
					})
				})
			})
		})
	})
})
