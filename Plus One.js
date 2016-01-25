/**
Given a non-negative number represented as an array of digits, plus one to the number.

The digits are stored such that the most significant digit is at the head of the list.
*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len = digits.length,
        overflow = 1,
        i;
    
    for (i = len - 1; i >= 0; i--) {
        digits[i] = digits[i] + overflow;
        if (digits[i] === 10) {
            overflow = 1;
            digits[i] = 0;
        } else {
            return digits;
        }
    }
    
    if (overflow === 1) {
        digits.unshift(1);
        return digits;
    }
};
