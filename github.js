// creating iffy, to prevent any global 

(function(){

	// crete my own github service 
	// using revealing module design pattern 
	// this fn retuns an object with api, this object is the githubn serive and represents public api 
	// get user and repos 
	// this github requires http service to allow me to getUser
	var github = function($http){

		var getUser = function(username){
			return $http.get("https://api.github.com/users/" + username)
					.then(function(response){
						
					});
		};
		return {

		};
	};
	// gettting a reference to myApp, not creating myApp, for creating you need to pass array in the second parameter
	/// gettting reference to existing module 
	var module = angular.module('myApp');
}());