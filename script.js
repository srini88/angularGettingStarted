
var myApp = angular.module('myApp',[]);

// adding interval service for setInterval js method
myApp.controller('myController', ['$scope','$http', '$interval', function ($scope, $http, $interval){
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

	var startCountdown = function(){
		// 3rd para number of intervals - without it wont stop
		$interval(decrementCountdown, 1000, 5);
	}

	$scope.search = function(username)
	{
		$http.get("https://api.github.com/users/" + username)
		 .then(onUserComplete, onError); 
	}
	$scope.message = "Srinivas is gonna be a top notch angular developer";
	$scope.countdown = 5;
	$scope.userName = "srini88";
	startCountdown();

}]);
myApp.controller('secondController', ['$scope','$http', function($scope, $http){
	

	$http.get('http://jsonplaceholder.typicode.com/posts/1')
	.then(function(response){
		$scope.output = response.data; 
	}, 
	function(reason){
		$scope.error = "Could not fetch shit"; 
	});
}]);
