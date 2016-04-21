/**
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var len = nums.length,
        minDiff = Number.MAX_VALUE,
        diff,
        left,
        right,
        i,
        j;
        
    nums.sort(function(a, b) {
        return a - b;
    });
    
    for (i = 0; i < len; i++) {
        left = i + 1;
        right = len - 1;
        
        while (left < right) {
            diff = target - nums[i] - nums[left] - nums[right];
            
            if (diff === 0) {
                return target;
            } else if (diff > 0) {
                left++;
            } else {
                right--;
            }
            
            if (Math.abs(diff) < Math.abs(minDiff)) {
                minDiff = diff;
            }
        }
    }
    
    return target - minDiff;
};
