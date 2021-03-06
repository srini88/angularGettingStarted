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

// angular promise weather forecase - son father
http://andyshora.com/promises-angularjs-explained-as-cartoon.html

r. When the dad has the forecast, he'll either pack up the boat, or stay inside. The important thing to note here, is the son's trip up the hill shouldn't 'block' the dad from doing anything, so this is why the situation is perfect for the creation of a promise, which can be resolved (fulfilled or rejected) later on.

'
// function somewhere in father-controller.js
        var makePromiseWithSon = function() {
            // This service's function returns a promise, but we'll deal with that shortly
            SonService.getWeather()
                // then() called when son gets back
                .then(function(data) {
                    // promise fulfilled
                    if (data.forecast==='good') {
                        prepareFishingTrip();
                    } else {
                        prepareSundayRoastDinner();
                    }
                }, function(error) {
                    // promise rejected, could log the error with: console.log('error', error);
                    prepareSundayRoastDinner();
                });
        };


A promise represents the eventual result of an operation. You can use a promise to specify what to do when an operation eventually succeeds or fails.


  This code uses the $http service to perform an HTTP GET on the url '/api/my/name'. Let's say that this is an api we've implemented on our server that returns the name of the logged in user.

Now a common mistake for JavaScript newcomers might be to assume that the function returns the name:

// The WRONG way!
var name = $http.get("/api/my/name");  
It doesn't - and in fact it can't. An HTTP request has to be executed, it'll take a while before it returns - it might not return at all if there are errors. Remember, when we make requests in JavaScript we're using ajax which is asynchronous javascript and xml. The key word here is asynchronous - we return control to the browser, let it make a request and give it a function to call when the request completes.

$http.get("/api/my/name")
  .then(
    /* success */
    function(response) {
      console.log("Your name is: " + response.data);
    },
    /* failure */
    function(error) {
      console.log("The request failed: " + error);
  });

How do Promises Work?
Promises are not actually complicated, they're objects that contain a reference to functions to call when something fails or succeeds.'.

Under the hood, AngularJS actually wires up a promise for an HTTP request in a way a bit like this

Advanced Promises - Routing
There's a particular area of AngularJS that uses promises to great effect, and that's the router.

Let's imagine we have a router like the following:

$routeProvider
   .when('/home', {
       templateUrl: 'home.html',
       controller: 'MainController'
   })
   .when('/profile', {
       templateUrl: 'profile.html',
       controller: 'ProfileController'
   })
'
    controllers in global name space not a good idea bro
    controllers live inside angular modules to avoid global namespace 

    one module many controllers --- many modules in an app

    provide some sort of container and live in some place and not in global namespace 

angular provided by angularJS is a particular module that is in global namespace so that we developers can use it 

modules depending on another modules 
app.controller -- this controller datatype is used to register a controller on that particular module 

when you bootstrap the application, you got to tell angular about this module 



controllers manipulate scope, 
module for our controllers to keep controllers out of global scope 
controllers use http service , service returns promise objects - you get data by using then method


----directives and views----------


directives work in both directions 
put shit from view into the model - use the directive ng-model 
specify an expression, and ng-model will push the value of the input into the scope object 

------ng-repeat----
dealiing with array of objects when we go to https://api.github.com/users/srini88/repos
[
{
id: 48929868,
name: "angular",
full_name: "srini88/angular",
owner: {
login: "srini88",
id: 3435834,
avatar_url: "https://avatars.githubusercontent.com/u/3435834?v=3",
gravatar_id: "",
url: "https://api.github.com/users/srini88",
html_url: "https://github.com/srini88",
followers_url: "https://api.github.com/users/srini88/followers",
following_url: "https://api.github.com/users/srini88/following{/other_user}",
gists_url: "https://api.github.com/users/srini88/gists{/gist_id}",
starred_url: "https://api.github.com/users/srini88/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/srini88/subscriptions",
organizations_url: "https://api.github.com/users/srini88/orgs",
repos_url: "https://api.github.com/users/srini88/repos",
events_url: "https://api.github.com/users/srini88/events{/privacy}",
received_events_url: "https://api.github.com/users/srini88/received_events",
type: "User",
site_admin: false
},



-----angular JS filters 

// Built in filters with angular 
Filters are added to directives, like ng-repeat, by using the pipe character |, followed by a filter:
currency Format a number to a currency format.
date Format a date to a specified format.
filter Select a subset of items from an array.
json Format an object to a JSON string.
limitTo Limits an array/string, into a specified number of elements/characters.
lowercase Format a string to lower case.
number Format a number to a string.
orderBy Orders an array by an expression.
uppercase Format a string to upper case.


{{price | currency}} prints $50   in js $scope.price = 50;



The filter filter selects a subset of an array.

The filter filter can only be used on arrays, and it returns an array containing only the matching items.


<li ng-repeat="x in names | filter : 'i'">
    {{ x }}
  </li>

have to use orderBy: 'name' istead of orderBy:'cust.name'

orderBy: 'name'  needs quotations  coz orderBy needs to know property to orderBy, so that angular will evaluate , (it is a string literal --- 

<li ng-repeat="cust in customer | orderBy: '-name'">  - does descending + does ascending 


ng-include can bring html from another soruce or file 
to reuse markup in other areas of application 


in angular, a service is a componenet that does a specific job
$http is a service 

aslo we can write out own custom service 

directive serves as intermediaty between model and view 
services   -  if the logic cannot fit in the model or view or directive, then service is something that will fit,  put logic in service and logic can be used anywhere in the app... 

directives can also use services, 
services can offer functionality to model and directives in a reusable way and contain logic that eiter does not belon in model or directive, 

services --- packgae up some fucntionality - refactor logic out of controller and put it in services 

---------------------------for next commit
Built IN service - timeout and interval services 

give only 5 seconds === to user to enter search item -- and by default have something there for to be searched on in the search box 

-- angular provides two services for setTimeout and setInterval instead of using vanilla functions - use the below services 

good coz of unit testing 


$timeout and $interval 


--- log service of angular 
log service methods - log , info, error, warn, debug



UI related services ---- sometimes more sense to use imperative js to interact with view in more direct fashion than relying on declarative html with directives inside 
some scenarios: force browser to new url ,...


$location service in angular --- model can talk to location service,

(location in the address bar )

----------------
brwoser window so small, user does not know auto refresh happened and got the results,   we need to make sure user sees that, for that identify some element in the results and move the user eye to that location 

use anchorscroll 

--- why woold I ever want to write service 

/// create reussable logic  instead of duplication code 
// store shared data - share data between controller 
// angular only instantiates a single instance of each service for a given application - if you use a service for 3 diff controllers, they will get the same service instance- means same data 
// services save complexity 


we will build a github service - encapsulate api calls to github 
instead o fusing http service directly from controller, use http from this new services, easy to manage complexity \

http://www.tutorialspoint.com/angularjs/angularjs_services.htm

AngularJS supports the concepts of "Separation of Concerns" using services architecture. Services are javascript functions and are responsible to do a specific tasks only. This makes them an individual entity which is maintainable and testable. Controllers, filters can call them as on requirement basis. Services are normally injected using dependency injection mechanism of AngularJS.

AngularJS provides many inbuilt services for example, $http, $route, $window, $location etc. Each service is responsible for a specific task for example, $http is used to make ajax call to get the server data. $route is used to define the routing information and so on. Inbuilt services are always prefixed with $ symbol.

There are two ways to create a service.

factory
service
