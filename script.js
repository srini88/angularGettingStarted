
var myApp = angular.module('myApp',[]);

myApp.controller('myController', ['$scope','$http', function ($scope, $http){
	//repos_url has repos_url: "https://api.github.com/users/srini88/repos
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

	// remember $scope very important - because search is coming from the view 
	// in ng-model we have the userName of the user you wantto search 
	$scope.search = function()
	{
		// url is this https://api.github.com/users/srini88/repos
		// telling then to call onUserComplete when http request is successful
		$http.get("https://api.github.com/users/" + $scope.userName)
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





myApp.controller('sampleController', ['$scope', function($scope){
	
	$scope.customer  = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];

    $scope.price = 56; 
}]);
