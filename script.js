
var myApp = angular.module('myApp',[]);

myApp.controller('myController', ['$scope', function ($scope){


	var person = {
		firstName : "Srinivas",
		lastName : "Palghat"
	}


	$scope.message = "Srinivas is gonna be a top notch angular developer";
	$scope.person = person;
}]);

