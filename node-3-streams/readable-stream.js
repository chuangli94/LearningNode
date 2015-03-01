var request = require('request');

var s = request('http://www.pluralsight.com/');

s.on('data', function(chunck){
  console.log('>>>Data>>> ' + chunck);
});

s.on('end', function(){
  console.log(">>>Done!>>>");
});
