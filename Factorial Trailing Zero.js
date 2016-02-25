/**
Given an integer n, return the number of trailing zeroes in n!.

Note: Your solution should be in logarithmic time complexity.
*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var divider = 5,
        reminder = 0;
    
    while (divider <= n) {
        reminder += Math.floor(n/divider);
        divider = divider * 5;
    }
    
    return reminder;
};
