/**
Note: This is an extension of House Robber.

After robbing those houses on that street, the thief has found himself a new place for his thievery so that he will not get too much attention. This time, all houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, the security system for these houses remain the same as for those in the previous street.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
*/
/**
 * @param {number[]} nums
 * @return {number}
 * 因为首尾相连了，所以第一家和最后一家只能抢其中的一家，或者都不抢，那我们这里变通一下，如果我们把第一家和最后一家分别去掉，各算一遍能抢的最大值，然后比较两个值取其中较大的一个即为所求。
 */
var rob = function(nums) {
    var len = nums.length;
    
    if (len === 0) {
        return 0;
    }
    
    if (len === 1) {
        return nums[0];
    }
    
    return Math.max(getMax(0, len - 1, nums), getMax(1, len, nums));
};

function getMax(start, end, nums) {
    var arr = [],
        i;
    
    if (end - start <= 1) {
        return nums[start];
    }
    
    arr[start] = nums[start];
    arr[start + 1] = Math.max(nums[start], nums[start + 1]);
    
    for (i = start + 2; i < end; i++) {
        arr[i] = Math.max(arr[i - 1], arr[i - 2] + nums[i]);
    }
    
    return arr[end - 1];
}
