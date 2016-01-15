
var myApp = angular.module('myApp',[]);

// adding interval service for setInterval js method
myApp.controller('myController', ['$scope','$http', '$interval', '$log', function ($scope, $http, $interval, $log){
	var onUserComplete = function(response){
		$scope.user = response.data;
		console.log($scope.user);
		//alert($scope.user.repos_url);
		$http.get($scope.user.repos_url)
		.then(rePos, onError);
	};

	var rePos = function(response){
		$scope.rePos = response.data;
		// /alert(rePos);
	};

	var onError = function(reason){
		$scope.error = "Could not fetch the data";
	};

	var decrementCountdown = function(){
		$scope.countdown -=1;
		if ($scope.countdown <1){
			$scope.search($scope.userName);
		}
	}

	// we dont want that countdown time to be showing 0 on the page after we see the results and we dont want the automatic trigger when the user already entered the user name within 5 secs

	var remCount = null;

	var startCountdown = function(){
		// 3rd para number of intervals - without it wont stop
		// this interval is gonna return an object to me 
		remCount = $interval(decrementCountdown, 1000, 5);
	}

	$scope.search = function(username)
	{
		$log.info("Searching for " + username);
		$http.get("https://api.github.com/users/" + username)
		 .then(onUserComplete, onError); 
		 // we fetched once 
		if (remCount){
			$interval.cancel(remCount);
			$scope.countdown = null;
		}

	}
	$scope.message = "Srinivas is gonna be a top notch angular developer";
	$scope.countdown = 5;
	$scope.userName = "srini88";
	startCountdown();

}]);
