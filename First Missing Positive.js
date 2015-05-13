/**
Given an unsorted integer array, find the first missing positive integer.

For example,
Given [1,2,0] return 3,
and [3,4,-1,1] return 2.

Your algorithm should run in O(n) time and uses constant space.

 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var len = nums.length,
        temp,
        i;
    
    for (i = 0 ; i < len; i++) {
        while (nums[i] !== i + 1) {
            if (nums[i] > len || nums[i] < 1 || nums[i] === nums[nums[i] - 1]) {
                break;
            }
            temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }
    
    for(i = 0; i < len; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return len + 1;
};
