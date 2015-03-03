var fun = require('./mathfun');

process.on('message', function(m) {
  console.log("Child pid is: " + process.pid);
  if (m.cmd === 'double') {
    console.log('hs: I was asked to double ' + m.number);
    fun.evenDoubler(m.number, function(err, res) {
      process.send({answer: res});
    });
  } else if (m.cmd === 'done') {
    process.exit();
  }
});
