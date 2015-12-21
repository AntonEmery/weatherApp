var express = require('express');
var https = require('https');
var app = express();
require("./routes.js")(app);


app.use(express.static(__dirname + '/public'));




app.listen(8033, function() {
	console.log('Server running in port 8033');
});