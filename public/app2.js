angular.module('weatherApp', [])
.controller('mainCtrl', function($scope, weatherService) {
	$scope.submitZip = function(zipcode) {
		weatherService.getWeather(zipcode, function(response) {
			console.log(response);
			$scope.currentDay = response.data.forecast.simpleforecast.forecastday[0]; //current day
			$scope.futureDays = response.data.forecast.simpleforecast.forecastday.slice(1); //array of the next 3 days
			//Gets temp for future days
			$scope.futureDays.forEach(function(day,i) {
				$scope.futureDays[i].avetemp = Math.floor((Number(day.high.fahrenheit) + Number(day.low.fahrenheit)) / 2);
			});
			console.log($scope.currentDay);
			console.log($scope.futureDays);
		});

		weatherService.getState(zipcode).success(function(data) {
			$scope.city = data.location.city;
			$scope.state = data.location.state;
		});

		weatherService.getTempToday(zipcode).success(function(data) {
			$scope.temp = data.current_observation.feelslike_f;
		});
	}
})
.service('weatherService', function($http) {

	this.getTempToday = function(zipcode) {
		return $http({method: 'GET', url: 'http://api.wunderground.com/api/80a03450e229a874/conditions/q/' + zipcode + '.json'});	
	}
	this.getWeather = function(zipcode, callback) {
		$http.get('http://api.wunderground.com/api/80a03450e229a874/forecast/q/' + zipcode + '.json')
		.then(callback);
	}

	this.getState = function(zipcode) {
		return $http({method: 'GET', url: 'http://api.wunderground.com/api/80a03450e229a874/geolookup/q/' + zipcode + '.json'});
	}
})
.directive('displayWeather', function() {
	return {
		templateUrl: 'templates/weather.html',
		replace: true,
		restrict: 'E',
		controller: 'mainCtrl'
	};
})
.directive('displayDay', function() {
	return {
		templateUrl: 'templates/day.html',
		replace: true,
		restrict: 'E',
	}
})



