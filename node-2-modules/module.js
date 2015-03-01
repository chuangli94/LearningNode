var mathfun = require('./mathfun.js');

var counter = 0;
var handleResults = function(err, results, time){
  if (err) {
    console.log("ERROR: " + err.message);
  } else {
    console.log("The results are: " + results + " (" + time + " ms)");
  }
  if(++counter == 10){
    console.log("DONE");
  }
};



for (var i=0; i<10; i++) {
  console.log("On " + i);
  mathfun.evenDoubler(i, handleResults);
}

console.log('------');

console.log("the 'foo' variable from module 'mathfun' = " + mathfun.foo);
console.log("the 'maxtime variable is not exported: " + mathfun.maxTime);
