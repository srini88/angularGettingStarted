//building angular and node.js apps with the mean stack Pluralshight - joe eames 

// angular js serivces in depth brice wilson pluralsight


// sublimeText angular code completion : http://weblogs.asp.net/dwahlin/using-the-angularjs-package-for-sublime-text


NODE gaining market share 
express js middleware - express provides framework on Node 
DB - before relational databases --- Amaozn requies performance - mysql not working - - so nosql came into picture

no contraints and referential integrity 
MongoDB

stores data into BSON - binary representation of JS 

JS on all tiers 

why services? making most of the built-in functionality 
writing own services - 
service decorators 

provider factory services  value constant 

$provide - provided by angular 
--------------------------------------------------------------
npm -- defacto management - use npm to track your dependencies 


node is a oepn source cross platform run time env for server side and networking applciations

built on top of chrome javascript run time on top of v8 engine  - so apps are written in js


check whether node is installed --- node --version 

exeecuting tasks asynchronously 

you don't wait '
node performs well with webapps -- async code with callbacks 

angular js getting started

JS patterns: angular relies heavily on the functional nature of javascript

functions as abstractions - functions to build module  ,functions to avoid global variables 

in JS global variables are beyond bad -- since JS is a dynamically typed language, easy for me to override varibale 

------Angular Controller basics------

use ng-controller 

controllers are functions,  angular invokes these functions, we dont invoke directly 
angular passes a parameter $scope to the function 

things we attach to that scope are gonna be the model 

controller never manipulates html, it only manipulates the scope

view and controller never interact directly in angular 
where as jquery js code typically directly manipulates html by looking inside html 

angular simplifies the scenario - by separating 

controller  can be multiple controllers on same page, complex objects, nest controllers

the model data can be put as just text in html as well as in html attributes 



In angular if binding expression does not work, it does not throw an error and break the page - which means you have to watch out the page carefully 


Try to retrieve data from the server using $http

webserver might need to talk to SQL or NOsQL db


$http service - encapsulates HTTP communication , GET , POST, PUT and delete 

how to access http service in a controller - ask angular by passing a parameter 



$scope.user = $http.get("");

http.get is asynchronous - call might take 200 ms , 1 hr, 
what http methods do is they return an object known as promise 

promise object that promises to give you some result in the future. 
may be the actual data or error 

so call the then method on the promise and pass the then method a function that will be called in the future 


promise.then(function(response){

// all you need to look at is the response.data 
})

using GITHUB.com api, has 3 characterictics 
available from jS in a browser, respponse from JSON format 
no authentication or client key required 



when I do this https://api.github.com/users/srini88

{
  "login": "srini88",
  "id": 3435834,
  "avatar_url": "https://avatars.githubusercontent.com/u/3435834?v=3",
  "gravatar_id": "",
  "url": "https://api.github.com/users/srini88",
  "html_url": "https://github.com/srini88",
  "followers_url": "https://api.github.com/users/srini88/followers",
  "following_url": "https://api.github.com/users/srini88/following{/other_user}",
  "gists_url": "https://api.github.com/users/srini88/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/srini88/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/srini88/subscriptions",
  "organizations_url": "https://api.github.com/users/srini88/orgs",
  "repos_url": "https://api.github.com/users/srini88/repos",
  "events_url": "https://api.github.com/users/srini88/events{/privacy}",
  "received_events_url": "https://api.github.com/users/srini88/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Srinivas Pv",
  "company": "Member Technical Staff at NetApp",
  "blog": null,
  "location": "Wichita, KS",
  "email": "pvsrinivas.ece@gmail.com",
  "hireable": null,
  "bio": null,
  "public_repos": 7,
  "public_gists": 1,
  "followers": 1,
  "following": 6,
  "created_at": "2013-01-31T07:39:38Z",
  "updated_at": "2016-01-04T09:25:18Z"
}






