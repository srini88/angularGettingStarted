
// now we need an object 
// I need a worker object 
// functions as modules 


// function returning an object 
// createWorker gonna return an object
// this is called revealing module pattern 


// still we have global variables problem 

// problem : createworker and worker below are bad - global 
// in JS global variables are beyond bad -- since JS is a dynamically typed language, easy for me to override varibale 


// by this we reduced from 2 global variables to one global variable
// var program = function(){
// 	var createWorker = function(){

// 		// private implemntation details 
// 		var workCount = 0;
// 		var task1 = function(){
// 			workCount +=1;
// 			console.log("task1 logging   " + workCount);
// 		};

// 		var task2 = function(){
// 			workCount +=1;
// 			console.log("task2 logging  " + workCount);
// 		};
// 		// we are exposing to the outside world
// 		return {
// 			job1: task1,
// 			job2: task2
// 		};

// 	};
// 	var worker  = createWorker();


// 	//worker.task1();  // will not work because task1 is private to createWorker only , cannot be called from outside
// 	worker.job1();
// 	worker.job2();
// }();


// now I have built something called IIFY - immediately invoked function expression 
// it immediately invokes itself - we cannot remove the starting parentheseis, getting compilation error without 

// we use occasinaoly iffy occasionally - to avoid globals 
(function(){
	var createWorker = function(){

		// private implemntation details 
		var workCount = 0;
		var task1 = function(){
			workCount +=1;
			console.log("task1 logging   " + workCount);
		};

		var task2 = function(){
			workCount +=1;
			console.log("task2 logging  " + workCount);
		};
		// we are exposing to the outside world
		return {
			job1: task1,
			job2: task2
		};

	};
	var worker  = createWorker();


	//worker.task1();  // will not work because task1 is private to createWorker only , cannot be called from outside
	worker.job1();
	worker.job2();
}());