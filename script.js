
var myApp = angular.module('myApp',[]);

myApp.controller('myController', ['$scope','$http', function ($scope, $http){

	var onUserComplete = function(response){
		$scope.user = response.data;
	};

	var onError = function(reason){
		$scope.error = "Could not fetch the user";
	};

	// remember $scope very important - because search is coming from the view 
	// in ng-model we have the userName of the user you wantto search 
	$scope.search = function()
	{
		// url is this https://api.github.com/users/srini88/repos
		// telling then to call onUserComplete when http request is successful
		$http.get("https://api.github.com/users/" + $scope.userName +"/repos")
		 .then(onUserComplete, onError);  //then is only invoked if the call is successful 
	}

	
	$scope.message = "Srinivas is gonna be a top notch angular developer";

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