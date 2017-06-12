var db = require('./models');

var users_list = [
	{
		user: 'Shane West', // reference
		userName: 'DrWest1',
		password: 'Hotrebel1',
		email: 'drwest@g.com',
		phoneNumber: '(555)123-4567',
		location: 'San Francisco, CA',
		hometown: 'Baton Rouge, LA',
		imgUrl: '',
		birthday: '06/10/1978',
		gender: 'Male',
		status: 'Single',
		interestedIn: 'Women',
		blurb: 'I\'m a rebel with a kind heart. I just got my doctorate degree and have been looking for that special someone to share a walk to remember. I also have a dog named, Germie, which is named after my band: Germs.',
		verified: true
	},
	{
		user: 'Mandy Moore',
		userName: 'CandyMandy',
		password: 'alwaysCrushin0nU',
		email: 'therealmandy@g.com',
		phoneNumber: '(555)456-1234',
		location: 'San Francisco, CA',
		hometown: 'Nashua, NH',
		imgUrl: '',
		birthday: '04/10/1984',
		gender: 'Female',
		status: 'Single',
		interestedIn: 'Men',
		blurb: 'I am really the girl next door. I love helping and meeting people. I\'m a bit shy and I\'m afraid of getting my heart broken. I would like to meet a guy who is really interested in what I have to say-- and just treats me with respect. I sincerely enjoy long walks and taking in beautiful views.',
		verfied: true
	},
	{
		user: 'Julie Huang',
		userName: 'JuhjuhJulie',
		password: 'cashMe0utside',
		email: 'juju@g.com',
		phoneNumber: '(555)168-0008',
		location: 'Oakland, CA',
		hometown: 'Los Angeles, CA',
		imgUrl: '',
		birthday: '12/07/1987',
		gender: 'Female',
		status: 'Taken',
		interestedIn: 'Men',
		blurb: 'When I\'m not working, I like to spend my days walking-- especially at museums. Over the years, I have accumulated a long list of walks that I would love to share with everyone in the world! Keep checking out my profile for new walks every week! (Especially if you\'re looking for ones in the Bay Area and Los Angeles!)',
		verfied: true
	},
	{
		user: 'Jeff Lien',
		userName: 'ALi3n626',
		password: 'Humptydumpty11',
		email: 'alien626@g.com',
		phoneNumber: '(555)111-0908',
		location: 'Oakland, CA',
		hometown: 'Diamond Bar, CA',
		imgUrl: '',
		birthday: '11/08/1988',
		gender: 'Male',
		status: 'Taken',
		interestedIn: 'Women',
		blurb: 'I work in a really stressful environment in SF.. so taking walks in super necessary. Though I am taken-- sorry ladies-- I do have a lot of great walks to share. Hopefully, the walks I share will help you clear your head or give you some inspiration whenever you are feeling stressed or uninspired. At the moment, my favorite walks are in Oakland-- where I live with my gf!',
		verfied: true
	},
	{
		user: 'Mariah Carey',
		userName: 'MadameMimiButterfly',
		password: 'D1VA4LIFE',
		email: 'madamemimi@g.com',
		phoneNumber: '(555)100-5000',
		location: 'San Francisco, CA',
		hometown: 'Nashua, NH',
		imgUrl: '',
		birthday: '03/27/1969',
		gender: 'Female',
		status: 'Single',
		interestedIn: 'Men',
		blurb: 'You might know me as the best singer in the entire world. I give my all when I sing-- and I\'m sure you know it. Because I work so hard all the time, I just haven\'t met the one I belong with yet. Nick is a great baby daddy but I still need more. Hopefully, the ONE is out there. If so, holler at me for a walk!',
		verfied: true
	}

];

var walks_list = [
	{
		user: 'Shane West', // reference
	  usersFavorited: ['Shane West', 'Mandy Moore', 'Julie Huang', 'Pharrel Williams', 'Beyonce', 'Jay-Z'], // reference
	  rating: 5,
		title: 'A Walk to Remember',
		content: 'I had a dream about this path by a glistening bay with tall weeds.. and I thought I would never find it.. until yesterday. My friend told me about this place called Albany Bulb-- it\'s got the right amount of weeds and the right amount of glisten. There\'s a lot of trees for shade-- perfect for a picnic after the walk. When I was there, I kept wishing there was someone I could walk with..',
		location: 'Albany, CA',
		dateCreated: '06/10/2017',
		important: 'yes',
	  archive: false,
	  private: false,
		images: []
	},
	{
		user: 'Mandy Moore', // reference
	  usersFavorited: ['Shane West', 'Mandy Moore', 'Mariah Carey', 'Gal Gadot', 'Chris Pine'], // reference
	  rating: 5,
		title: 'I\'ve Got A Crush on This View',
		content: 'Today, I went on a walk after class, which was around 5pm. It was a really tough day-- so I really needed some air. I started from 225 Bush and headed toward the Embarcadero. A lot of people were rushing down the street and bumping into me-- and I thought the walk was actually turning out to be a bad idea. However, as I got closer to the Embarcadero, I saw the bay-- shining in the afternoon light, and completely calm. I got to the Embarcadero and sat down on a block of cement. I took a deep breath.. and I felt a lot better. The view really brought me to a peaceful place. I\'ve been going there for the past couple of days-- and I highly recommend coming here for a good view and a deep breath of air.',
		location: 'San Francisco, CA',
		dateCreated: '06/08/2017',
		important: 'yes',
	  archive: false,
	  private: false,
		images: []
	},
	{
		user: 'Mariah Carey', // reference
	  usersFavorited: ['Slim Shady', 'Nick Cannon', 'Julie Huang', 'Ariana Grande'], // reference
	  rating: 4,
		title: 'This Walk is A Fantasy',
		content: 'I usally don\'t do a lot of walking but I love jogging (because, then I can wear my cute Juicy Couture jogging outfit)! So, yesterday, I went on a jog in the Presidio, with my doggie boo, around the Walt Disney Museum area, in the early morning. There were not a lot of people around (since normal people work in the morning) so nobody really recognized me-- which is great, because I don\`t like signing autographs so early in the morning. Anyway, it was a sunny day with a bit of wind-- and it blew my hair the right way, so I looked extra fabulous. I felt great after that jog. I would highly recommend jogging here on weekday mornings. Take a selfie or two, because that wind will make your hair look uh-mazing!',
		location: 'San Francisco, CA',
		dateCreated: '06/05/2017',
		important: 'no',
	  archive: false,
	  private: false,
		images: []
	},
	{
		user: 'Julie Huang', // reference
	  usersFavorited: ['Angelina Jolie', 'Beyonce', 'Mandy Moore', 'Pharrel Williams', 'Jeff Lien'], // reference
	  rating: 5,
		title: 'Walkin\' to A Rockin\' View',
		content: 'There\'s a walk I always take people on whenever they\'re sad. It\'s pretty successful at cheering people up because the view at the end of the walk is so beautiful and no one really knows about it. You can see the Golden Gate Bridge, Alcatraz, the Bay Bridge, as well as some beautiful mansions. Fog or shine, the windy walk provides a good amount of time and airspace to talk about anything on peoples\'s minds. The walk begins behind Ghiradelli and up toward Coit Tower. You then make a left at the fork and continue walking all the way up until you see another fork in the road. From here, you make a right-- it should look like you are going into a dense forest-- but you\'ll find out soon enough, there is a nice path beyond the trees. At the end of the path, you should see the view I mentioned at the start of this post. Enjoy!',
		location: 'San Francisco, CA',
		dateCreated: '05/20/2017',
		important: 'yes',
	  archive: false,
	  private: false,
		images: []
	},
	{
		user: 'Jeff Lien', // reference
	  usersFavorited: ['Julie Huang', 'Angelina Jolie', 'Mariah Carey', 'Pharrel Williams', 'Emma Watson'], // reference
	  rating: 5,
		title: 'It\'s Fun Walking Up These Stairs',
		content: 'I have been on this exercise craze for the past several weeks just because I want to look good this summer. Going to the gym hasn\'t been extremely motivating so I have been trying out different locations in the Bay Area to exercise at. I have really tried out all the lakes and parks in the Bay Area, and the best ones have some stairs to run up and down on. Stairs are a great source of cardio and is also great for your glutes. So, onto the real walk of interest: my favorite place to walk/exercise on stairs is right across Lake Meritt. There is a fountain in front of the stairs-- so you can\'t miss it.',
		location: 'Oakland, CA',
		dateCreated: '05/30/2017',
		important: 'yes',
	  archive: false,
	  private: false,
		images: []
	},
	{
		user: 'Pharrel Williams', // reference
	  usersFavorited: ['Jeff Lien', 'Shane West', 'Julie Huang', 'Mariah Carey', 'Beyonce', 'Jay-Z', 'Emma Watson'], // reference
	  rating: 5,
		title: 'Happy Walking',
		content: 'I am so happy to share with you this walk. I\'m sure a lot of people know about this because it is so popular-- but just in case y\'all don\'t know, I want to share. My favorite walking spot is along the Santa Monica boardwalk. The Beach Boys got it right when they sang about The Boardwalk-- it really is the place to be! It is always bright, sunny, and filled with smiling faces. It doesn\'t get any happier than walking along here. I always see lovers and families just hangin\' out here. It\'s not surprising because it is just a happy place to be! If you\'re looking for a happy place to walk, I would highly recommend heading to the Santa Monica boardwalk! Also, try my favorite hot dog place, Japadog, while you are there.',
		location: 'Santa Monica, CA',
		dateCreated: '06/06/2017',
		important: 'yes',
	  archive: false,
	  private: false,
		images: []
	}
];

// var messages_list = [
// 	{
// 		userIMG: '/images/profiles/face1.jpg',
// 		user: 'Anthony L.',
// 		user: 'San Francisco',
// 		title: 'Home is Where the Sandwich is',
// 		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
// 		date: '5/10/2017'
// 	},
// 	{
// 		userIMG: '/images/profiles/face2.jpg',
// 		user: 'George C.',
// 		user: 'San Francisco',
// 		title: 'Nowhere Man',
// 		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
// 		date: '1/2/2014'
// 	},
// 	{
// 		userIMG: '/images/profiles/face3.jpg',
// 		user: 'George C.',
// 		user: 'San Francisco',
// 		title: 'Nowhere Man',
// 		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
// 		date: '1/2/2014'
// 	},
// 	{
// 		userIMG: '/images/profiles/face4.jpg',
// 		user: 'George C.',
// 		city: 'San Francisco',
// 		title: 'Nowhere Man',
// 		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
// 		date: '1/2/2014'
// 	},
// 	{
// 		userIMG: '/images/profiles/face5.jpg',
// 		user: 'Violet',
// 		city: 'Dubai',
// 		title: 'Words from a Local',
// 		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
// 		date: '5/10/2017'
// 	},
// 	{
// 		userIMG: '/images/profiles/face6.jpg',
// 		user: 'Blair',
// 		city: 'Reykjavik',
// 		title: 'Really Cool Vibes, Man.',
// 		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
// 		date: '5/10/2017'
// 	},
// 	{
// 		userIMG: '/images/profiles/face7.jpg',
// 		user: 'Emma Frost',
// 		city: 'Tokyo',
//
// 		title: 'I Want To Hold My Hand',
// 		text: 'COLD COLD COLD, but the hot springs are a must see.',
// 		date: '4/10/2016'
// 	},
// 	{
// 		userIMG: '/images/profiles/face8.jpg',
// 		user: 'Julie Huang',
// 		city: 'Tokyo',
// 		title: 'I Want To Hold My Hand',
// 		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
// 		date: '4/10/2016'
// 	},
// 	{
// 		userIMG: '/images/profiles/face9.jpg',
// 		user: 'Mahmoud Bachir',
// 		city: 'Amsterdam',
// 		title: 'Lucy In The Sky With Diamonds',
// 		text: 'Ramen was so bomb!',
// 		date: '3/25/2017'
// 	}
// ];

db.User.remove({}, function(err, users) {
console.log('removed all walks');
db.User.create(users_list, function(err, users) {
	if (err) {
		console.log(err);
		return;
	}

		db.Walks.remove({}, function(err, walks) {
			console.log('removed all walks')

			walks_list.forEach(function(walksInfo) {
				var walk = new db.Walks({
					userName: walksInfo.userName,
					user: walksInfo.user,
					location: walksInfo.location,
					title: walksInfo.title,
					content: walksInfo.content,
					dateCreated: walksInfo.dateCreated,
					userCreatedID: walksInfo.userID,
					rating: walksInfo.rating,
					images: walksInfo.images[0],
					important: walksInfo.important
				});
				db.Walks.findOne({name: walksInfo.user}, function(err, foundWalk) {
					if(err) {
						console.log(err);
						return;
					}
					walk.user = foundWalk;
					walk.save(function(err, savedWalk) {
						if(err) {
							return console.log(err);
						}
						console.log('saved ', savedWalk);
					})
				})
			})
		})
	})
})
