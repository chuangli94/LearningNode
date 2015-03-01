var EventEmitter = require('events').EventEmitter;

var getResources = function(num) {
  var e = new EventEmitter();
  process.nextTick(function(){
    var count = 0;
    e.emit('start');
    var t = setInterval(function(){
      count++;
      e.emit('data', count);
      if (count == num){
        e.emit('end', count);
        clearInterval(t);
      }
    }, 10);
  });
  return(e);
};

var results = getResources(5);

results.on('start', function(){
  console.log("started");
});

results.on('data', function(d){
  console.log("processing " + d);
});

results.on('end', function(t) {
  console.log("ended at " + t);
});
