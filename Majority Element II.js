/**
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times. The algorithm should run in linear time and in O(1) space.

Hint:

How many majority elements could it possibly have?
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    var len = nums.length,
        candidate1,
        count1 = 0,
        candidate2,
        count2 = 0,
        result = [],
        i;
    
    
    for (i = 0; i < len; i++) {
        if (nums[i] === candidate1) {
            count1++;
        } else if (nums[i] === candidate2) {
            count2++;
        } else if (count1 === 0) {
            count1++;
            candidate1 = nums[i];
        } else if (count2 === 0) {
            count2++;
            candidate2 = nums[i];
        } else {
            count1--;
            count2--;
        }
    }
    
    count1 = 0;
    count2 = 0;
    
    for (i = 0; i < len; i++) {
        if (nums[i] === candidate1) {
            count1++;
        } else if (nums[i] === candidate2) {
            count2++;
        }
    }
    
    if (count1 > Math.floor(len / 3)) {
        result.push(candidate1);
    }
    
    if (count2 > Math.floor(len / 3)) {
        result.push(candidate2);
    }
    
    return result;
};