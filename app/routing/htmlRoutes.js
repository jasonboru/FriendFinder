const path = require("path");

module.exports = function(app){

	app.get('/surveyFans', function (req, res) {
	  	res.sendFile(path.join(__dirname, "../public/surveyFans.html"))
	});

	app.get('/surveyCharacters', function (req, res) {
			res.sendFile(path.join(__dirname, "../public/surveyCharacters.html"))
	});

	app.use( function (req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"))
		// res.sendFile("home.html");
	});
}
