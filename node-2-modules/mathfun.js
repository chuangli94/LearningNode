var maxTime = 1000;

var evenDoubler = function(v, callback){
  var randomTime = Math.floor(Math.random()*(maxTime+1));
  if( v % 2 == 0) {
    setTimeout(function(){
      callback(null, v * 2, randomTime);
    }, randomTime);
  } else {
    var err = new Error("odd number");
    setTimeout(function(){
      callback(err);
    }, randomTime);
  }
};


module.exports.evenDoubler = evenDoubler;
module.exports.foo = "bar";

//evenDoubler(2, handleResults);
//evenDoubler(1, handleResults);
