var maxTime = 200;

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

var evenDoublerSync = function(v) {
  if (v%2) throw (new Error("ODD INPUT"));
  else return v*2;
}

module.exports.evenDoubler = evenDoubler;
module.exports.evenDoublerSync = evenDoublerSync;
module.exports.foo = "bar";

//evenDoubler(2, handleResults);
//evenDoubler(1, handleResults);
