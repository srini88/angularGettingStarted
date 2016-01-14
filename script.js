
// now we need an object 
// I need a worker object 
// functions as modules 


// function returning an object 
// createWorker gonna return an object
// this is called revealing module pattern 


// still we have global variables problem 
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

worker.job1();
worker.job2();
