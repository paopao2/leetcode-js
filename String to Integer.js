/**
Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

Update (2015-02-10):
The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button  to reset your code definition.

spoilers alert... click to show requirements for atoi.

Requirements for atoi:
The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned. If the correct value is out of the range of representable values, INT_MAX (2147483647) or INT_MIN (-2147483648) is returned.

*/
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var len = str.length,
        isNegative = null,
        result = 0,
        numberStarted = false,
        cur,
        i;
        
    for (i = 0; i < len; i++) {
        if (str.charAt(i) === ' ') {
            if (!numberStarted) {
                continue;
            } else {
                return getResult(isNegative, result);
            }
        }
        
        if (isNegative === null) {
            if (str.charAt(i) === '-') {
                isNegative = true;
                numberStarted = true;
                continue;
            } else if (str.charAt(i) === '+') {
                isNegative = false;
                numberStarted = true;
                continue;
            }
        }
        
        cur = parseInt(str.charAt(i));
        
        if (!isNaN(cur)) {
            result = result*10 + cur;
            
            if (!numberStarted) {
                numberStarted = true;
            }
        } else {
            return getResult(isNegative, result);
        }
    }
    
    return getResult(isNegative, result);
};
// :(
function getResult(isNegative, result) {
    result = isNegative? result * (-1) : result;
    
    if (result > 2147483647) {
        result = 2147483647;
    } else if (result < -2147483648) {
        result = -2147483648;
    }
    
    return result;
}
