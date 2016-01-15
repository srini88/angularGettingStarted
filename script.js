
var myApp = angular.module('myApp',[]);

myApp.controller('myController', ['$scope','$http', function ($scope, $http){

	var onUserComplete = function(response){
		$scope.user = response.data;
	};

	var onError = function(response){
		$scope.error = "Could not fetch the user";
	};
	// telling then to call onUserComplete when http request is successful
	$http.get("https://api.github.com/users/srini88")
		 .then(onUserComplete, onError);  //then is only invoked if the call is successful 
	$scope.message = "Srinivas is gonna be a top notch angular developer";

}]);





myApp.controller('secondController', ['$scope','$http', function($scope, $http){
	

	$http.get('http://jsonplaceholder.typicode.com/posts/1')
	.then(function(response){
		$scope.output = response.data; 
	}, 
	function(response){
		$scope.error = "Could not fetch shit"; 
	});
}]);