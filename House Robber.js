/**
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var len = nums.length,
        result = [],
        i;
    
    if (len === 0) {
        return 0;
    }
    if (len === 1) {
        return nums[0];
    }
    
    result[0] = nums[0];
    result[1] = Math.max(nums[1], nums[0]);
    for(i = 2; i < len; i++) {
        result[i] = Math.max(result[i - 2] + nums[i], result[i - 1]);
    }
    
    return result[len - 1];
};
