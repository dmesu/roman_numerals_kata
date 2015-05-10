var romanNumerals = {};

romanNumerals.convertFrom = function(arabicNumber){
    var romanNumber = "";
    for (var i = 0; i < arabicNumber; i++) {
        romanNumber += "I";
    }
    return romanNumber;
};

module.exports = romanNumerals;
