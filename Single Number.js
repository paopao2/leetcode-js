
/**
 * Given an array of integers, every element appears twice except for one. Find that single one.
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * 
 * @param {number[]} A
 * @return {number}
 */
var singleNumber = function(A) {
    var length = A.length,
        i,
        result = 0;
    if (length === 1) {
        return A[0];
    }
    for (i = 0; i < length; i++) {
        result = result ^ A[i];
    }
    return result;
};
