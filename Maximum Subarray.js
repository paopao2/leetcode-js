/**
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
the contiguous subarray [4,−1,2,1] has the largest sum = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var sum = 0,
        max = Number.NEGATIVE_INFINITY,
        len = nums.length,
        i;
        
    for (i = 0; i < len; i++) {
        sum += nums[i];
        
        max = Math.max(sum, max);
        
        if (sum < 0) {
            sum = 0;
        }
    }
    
    return max;
};


// divide and conquer

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    return helper(0, nums.length - 1, nums);
};

function helper(start, end, arr) {
    if (start > end) {
        return Number.NEGATIVE_INFINITY;
    }
    
    if (start === end) {
        return arr[start];
    }
    
    var mid = Math.floor((start + end) / 2),
        leftMax = Number.NEGATIVE_INFINITY,
        rightMax = Number.NEGATIVE_INFINITY,
        midMax,
        i,
        curSum;
    
    for (i = mid - 1, curSum = 0; i >= start; i--) {
        curSum += arr[i];
        leftMax = Math.max(curSum, leftMax);
    }
    
    for (i = mid + 1, curSum = 0; i <= end; i++) {
        curSum += arr[i];
        rightMax = Math.max(curSum, rightMax);
    }
    
    midMax = arr[mid] + Math.max(leftMax, 0) + Math.max(rightMax, 0);
    
    return Math.max(midMax, helper(start, mid - 1, arr), helper(mid + 1, end, arr));
}
