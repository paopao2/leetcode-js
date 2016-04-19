/**
Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

For example, given the range [5, 7], you should return 4.
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    var offset = 0;
    
    while (m && n) {
        if (m === n) {
            return m << offset;
        }
        
        m >>= 1;
        n >>= 1;
        offset++;
    }
    
    return 0;
};
