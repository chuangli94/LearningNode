var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Resource (m) {
  var maxEvents = m;
  var self = this;

  process.nextTick(function() {
    var count = 0;
    self.emit('start');
    var t = setInterval(function(){
      count++;
      self.emit('data', count);
      if (count === maxEvents) {
        self.emit('end', maxEvents);
        clearInterval(t);
      }
    }, 10);
  });
}

util.inherits(Resource, EventEmitter);

module.exports = Resource;
