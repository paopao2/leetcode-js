/**
Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while (n >= 3) {
        if (n % 3 !== 0) {
            break;
        }
        
        n = n / 3;
    }
    
    return n === 1;
};

// Math solution
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return (Math.log10(n) / Math.log10(3)) % 1 === 0;
};
