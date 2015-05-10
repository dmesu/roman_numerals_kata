var romanNumerals = {};

romanNumerals.convertFrom = function(arabicNumber){
    var romanNumber = "";
    if (arabicNumber >= 10) {
        romanNumber += "X";
        arabicNumber -= 10;
    }
    if (arabicNumber >= 5) {
        romanNumber += "V";
        arabicNumber -= 5;
    }
    for (var i = 0; i < arabicNumber; i++) {
        romanNumber += "I";
    }
    return romanNumber;
};

module.exports = romanNumerals;
