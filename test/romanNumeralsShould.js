var should = require('should');
var romanNumerals = require('../romanNumerals.js');

  describe('Roman Numerals', function(){
      it('should convert to I when 1 is provided', function(){
          romanNumerals.convertFrom(1).should.be.exactly("I");
      });

      it('should convert to II when 2 is provided', function(){
          romanNumerals.convertFrom(2).should.be.exactly("II");
      });

      it('should convert to III when 3 is provided', function(){
          romanNumerals.convertFrom(3).should.be.exactly("III");
      });

      it('should convert to V when 5 is provided', function(){
          romanNumerals.convertFrom(5).should.be.exactly("V");
      });

      it('should convert to VII when 7 is provided', function(){
          romanNumerals.convertFrom(7).should.be.exactly("VII");
      });

      it('should convert to X when 10 is provided', function(){
          romanNumerals.convertFrom(10).should.be.exactly("X");
      });

      it('should convert to XIII when 13 is provided', function(){
          romanNumerals.convertFrom(13).should.be.exactly("XIII");
      });

      it('should convert to XXI when 26 is provided', function(){
          romanNumerals.convertFrom(26).should.be.exactly("XXVI");
      });
  })
