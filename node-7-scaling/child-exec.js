var exec = require('child_process').exec;

var child = exec('uptime | 23cut -d "," -f 1', function(err, stdout, stderr) {
  if (err) {
    console.log(stderr);
  } else {
    console.log('Output is: ' + stdout);
  }
});

console.log("PID is: " + child.pid);
