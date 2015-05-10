var romanNumerals = {};

romanNumerals.convertFrom = function(arabicNumber){
    var romanNumber = "";
    if (arabicNumber === 5) {
        return "V";
    }
    for (var i = 0; i < arabicNumber; i++) {
        romanNumber += "I";
    }
    return romanNumber;
};

module.exports = romanNumerals;
