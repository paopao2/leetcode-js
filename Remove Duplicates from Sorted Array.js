/**
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

Subscribe to see which companies asked this question
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len = nums.length,
        cur,
        i, // original array's index
        j; // new array's index
    
    if (len === 0) {
        return 0;
    }
    
    cur = nums[0];
    
    for (i = 1, j = 0; i < len; i++) {
        if (nums[i] !== cur) {
            j++;
            nums[j] = nums[i];
            cur = nums[i];
        }
    }
    
    return j + 1;
};
