var http = require('http');

var options = {
  host: 'www.pluralsight.com',
  port: 80,
  path: '/',
  method: 'GET'
};

console.log("Going to make request...");

var req = http.get(options, function(res){ 
      console.log(res.statusCode);
      res.pipe(process.stdout);
  });


