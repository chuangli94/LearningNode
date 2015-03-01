var should = require('should');
var fun = require('./mathfun');

describe('MathFun', function() {
  
  describe('when used synchronously', function() {
    
    it('should double even numbers correctly', function() {
      fun.evenDoublerSync(2).should.equal(4);
    });

    it.skip('should throw on odd number', function(done) {
      (function() { fun.evenDoublerSync(3) }).should.throw(/ODD/);
      done();
    });
  });

  describe('when used asynchronously', function() {
    
    it('should double even numbers', function(done) {
      fun.evenDoubler(2, function(err, res) {
        should.not.exist(err);
        res.should.equal(4);
        done();
      });
    });

    it('should error on odd numbers', function(done) {
      fun.evenDoubler(3, function(err, res) {
        should.exist(err);
        should.not.exist(res);
        done();
      });
    });

  });

});
