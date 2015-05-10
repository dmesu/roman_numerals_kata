var should = require('should');
var romanNumerals = require('../romanNumerals.js');

  describe('Roman Numerals', function(){

    it('should return I when 1 is provided', function(){
        romanNumerals.convertFrom(1).should.be.exactly("I");
    })
  })
