# Overview
This app pulls from the [Weather Underground API](https://www.wunderground.com/weather/api/) and displays the current and three day forecast based on the specified zipcode. The app consists of two parts, a backend built in NOde.js and a front end built using Angular. The specified zip code is sent to the Node server, which then queries the weather service. The returned data is passed to Angular and displayed on the client. Using the Node server allows the API key to be hidden from the client, and makes it easy to use an entirely different front end framework if needed.

# Technologies Used
Node.js  
Angular  
Bootstrap

# Live Project
https://antonemery-weatherapp.herokuapp.com/
