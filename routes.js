var config = require("./config.js");
var https = require('https');
var request = require('request');



module.exports = function (app) {
	app.get('/', function(req, res) {
		res.sendFile(__dirname + '/public/index.html');
	})

	app.get('/getTempToday', function (req, res) {
		request('https://api.wunderground.com/api/' + config.apiKey + '/conditions/q/' + zip + '.json', function (error, response, body) {
				res.send(JSON.parse(body));
		})
	})

	app.get('/getState', function (req, res) {
		request('https://api.wunderground.com/api/' + config.apiKey + '/geolookup/q/' + zip + '.json', function (error, response, body) {
			res.send(JSON.parse(body));
		})
	})

	app.get('/getWeather', function (req, res) {
		request('https://api.wunderground.com/api/' + config.apiKey + '/forecast/q/' + zip + '.json', function (error, response, body) {
			res.send(JSON.parse(body));
		})
	})
}			

	

	/*
	app.get('/apicall', function (req, res) {
		var data = '';
		var apicall = https.get('https://api.wunderground.com/api/' + config.apiKey + '/conditions/q/97203.json', function (response) {
				response.on('data', function (chunk) {
					data += chunk;
				})
			response.on('end', function() {
				console.log(data);
				res.send(data);
			})
		})
	})
*/




