angular.module('weatherApp', [])
.controller('mainCtrl', function($scope, weatherService) {
	$scope.submitZip = function(zipcode) {
		console.log(zipcode);
		weatherService.getWeather(zipcode).success(function(data) {
			console.log('Current and next 3 days weather');
			console.log(data);
			$scope.currentDay = data.forecast.simpleforecast.forecastday[0]; //current day
			$scope.futureDays = data.forecast.simpleforecast.forecastday.slice(1); //array of the next 3 days
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
			console.log(data);
			$scope.temp = data.current_observation.feelslike_f;
		});
	}
})
.service('weatherService', function($http) {

	this.getTempToday = function(zipcode) {
		return $http({method: 'GET', url: '/getTempToday', params: {test: zipcode} });	
	}
	this.getWeather = function(zipcode) {
		return $http({method: 'GET', url: '/getWeather', params: {test: zipcode} });	
	}

	this.getState = function(zipcode) {
		return $http({method: 'GET', url: '/getState', params: {test: zipcode} });
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



