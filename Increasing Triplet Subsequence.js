/**
Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:
Return true if there exists i, j, k 
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Your algorithm should run in O(n) time complexity and O(1) space complexity.

Examples:
Given [1, 2, 3, 4, 5],
return true.

Given [5, 4, 3, 2, 1],
return false.

Credits:
Special thanks to @DjangoUnchained for adding this problem and creating all test cases.
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    var len = nums.length,
        x1 = Number.MAX_VALUE,
        x2 = Number.MAX_VALUE,
        i;
        
    for (i = 0; i < len; i++) {
        if (nums[i] < x1) {
            x1 = nums[i];
        } else if (x1 < nums[i] && nums[i] < x2) {
            x2 = nums[i];
        } else if (nums[i] > x2) {
            return true;
        }
    }
    
    return false;
};
