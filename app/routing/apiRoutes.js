const friends = require("../data/friends.js");

module.exports = function(app){

	app.get('/api/friends', function (req, res) {

		friends.getCurrentList()
			.then( (allFriends)=> res.json(allFriends) )
			.catch( (err)=> {if (err) console.log(err)} );
	});

	app.post('/api/friends', function (req, res){

		friends.matchToFriend(req.body).then((friend)=>{
			res.json(friend);
		}).catch((err)=>{if (err) console.log(err);});

	});
}
