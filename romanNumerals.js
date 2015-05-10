var romanNumerals = {};

romanNumerals.convertFrom = function(arabicNumber){
    if (arabicNumber === 1){
        return "I"
    }
    if (arabicNumber === 2){
        return "II"
    }
    return undefined;
};

module.exports = romanNumerals;
