/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n == 1) {
        return true
    }
    if (n === 0 || n % 3 > 0) {
        return false
    }
    return isPowerOfThree(n / 3)
};
