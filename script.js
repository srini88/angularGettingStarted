
var work = function(){
	console.log("working hard!");
}

work();

// passing another function as a variable and in this function executing the other function

// we providing some abstraction,  doWork helper method 
// using function as a basiss as abstraction
// functions as abstractions - functions to build module  ,functions to avoid global variables 
var doWork = function(f){
	f();
}

doWork(work);