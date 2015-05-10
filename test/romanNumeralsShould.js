var should = require('should');
var romanNumerals = require('../romanNumerals.js');

  describe('Roman Numerals', function(){
      it('should convert to I when 1 is provided', function(){
          romanNumerals.convertFrom(1).should.be.exactly("I");
      })

      it('should convert to II when 2 is provided', function(){
          romanNumerals.convertFrom(2).should.be.exactly("II");
      })

      it('should convert to III when 3 is provided', function(){
          romanNumerals.convertFrom(3).should.be.exactly("III");
      })

      it('should convert to V when 5 is provided', function(){
          romanNumerals.convertFrom(5).should.be.exactly("V");
      })
  })
