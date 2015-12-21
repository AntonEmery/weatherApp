var config = require("./config.js");
var https = require('https');
var request = require('request');



module.exports = function (app) {
	app.get('/', function(req, res) {
		res.sendFile(__dirname + '/public/index.html');
	})

	app.get('/home', function (req,res) {
		res.send('Home page');
	})


	app.get('/apicall', function (req, res) {
		request('https://api.wunderground.com/api/' + config.apiKey + '/conditions/q/97203.json', function (error, response, body) {
			console.log(body);
		})
				res.send('API call page');

	})

	/*
	app.get('/apicall', function (req, res) {
		var data = '';
		var apicall = https.get('https://api.wunderground.com/api/' + config.apiKey + '/conditions/q/97203.json', function (response) {
				response.on('data', function (chunk) {
					data += chunk;
				})
			response.on('end', function() {
				console.log(data);
			})
		})
		res.send('API call page');
	})
*/	

}



