/**
Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

For example,

Given numerator = 1, denominator = 2, return "0.5".
Given numerator = 2, denominator = 1, return "2".
Given numerator = 2, denominator = 3, return "0.(6)".

 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    var rem,
        quotient,
        map = [],
        collection = '',
        index,
        len
        result = '';

    if (numerator === 0) {
        return '0';
    }
    if (denominator === 0) {
        return '';
    }
    
    if ((numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0)) {
        result += '-';
    }
    numerator = Math.abs(Number(numerator));
    denominator = Math.abs(Number(denominator));
    
    quotient = Math.floor(numerator / denominator);
    result += quotient;
    
    rem = (numerator % denominator) * 10;
    if (rem === 0) {
        return result;
    }
    
    result += '.';
    while (rem !== 0) {
        quotient = Math.floor(rem/denominator);
        index = map.indexOf(rem);
        if (index === -1) {
            map.push(rem);
            collection += quotient;
        } else {
            collection = collection.substr(0, index) + '(' + collection.substr(index) + ')';
            break;
        }
        rem = (rem % denominator) * 10;
    }
    result += collection;
    return result;
};
