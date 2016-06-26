/**
Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        let candidate = 0;
        
        for (let i = 1; i < n; i++) {
            // if candidate know i, then swap
            if (knows(candidate, i)) {
                candidate = i;
            }
        }
        
        // check if a candidate if valid
        for (let i = 0; i < n; i++) {
            if (i !== candidate && (!knows(i, candidate) || knows(candidate, i))) {
                return -1;
            }
        }
        
        return candidate;
    };
};
