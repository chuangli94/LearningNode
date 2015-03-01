var fs = require('fs');

//var myrs = fs.createReadStream();
//fs.createWriteStream("");

//myrs.resume();


process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunck){
  process.stdout.write('Data! -> ' + chunck);
});

process.stdin.on('end', function () {
  process.stderr.write('End!\n');
});

process.on('SIGTERM', function() {
  process.stderr.write("Why are you trying to terminate me???");
});

console.log("Node is running as process #" + process.pid);
