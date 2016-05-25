/**
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

For example:
Given array A = [2,3,1,1,4]

The minimum number of jumps to reach the last index is 2. (Jump 1 step from index 0 to 1, then 3 steps to the last index.)

Note:
You can assume that you can always reach the last index.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var len = nums.length,
        step = 0,
        last = 0,
        cover = nums[0],
        i;
    
    for (i = 1; i < len; i++) {
        if (i > last) {
            last = cover;
            step++;
        }
        
        if (last >= len - 1) {
            break;
        }
        
        cover = Math.max(cover, nums[i] + i);
    }
    
    return step;
};


// time limit exceeded
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var len = nums.length,
        result = [];
        
    result[0] = Number.MAX_VALUE;
    helper(0, nums, 0, 0, result);
    
    return result[0];
};

function helper(index, nums, cover, step, result) {
    if (cover < index || step > result[0]) {
        return;
    }
    
    if (cover >= nums.length - 1) {
        result[0] = Math.min(result[0], step);
        return;
    }
    
    var i = index;
    
    for (i = index; i <= cover; i++) {
        helper(i + 1, nums, Math.max(cover, nums[i] + i), step + 1, result);
    }
}


// memory limit exceed
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var len = nums.length,
        dp = [],
        result = Number.MAX_VALUE,
        reachable = [],
        i,
        j;
    
    for (j = 0; j < len; j++) {
        reachable.push(new Array(len));
        for (i = j + 1; i < len; i++) {
            if (nums[j] + j >= i) {
                reachable[j][i] = true;
            } else {
                break;
            }
        }
    }
    dp[0] = 1;
    for (i = 1; i < len; i++) {
        // since there's always a solution
        dp[i] = dp[i - 1] + 1;
        
        for (j = 0; j < i; j++) {
            if (reachable[j][i]) {
                dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
    }
    
    return dp[len - 1];
};
