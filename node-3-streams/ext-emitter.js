var Resource = require('./resource');

var r = new Resource(7);

r.on('start', function(){
  console.log('I have started!');
});

r.on('data', function(d){
  console.log("   received data: " + d);
});

r.on('end', function(t){
  console.log("DONE, iwht " + t + " data events.");
});
