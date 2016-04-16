/**
Follow up for "Remove Duplicates":
What if duplicates are allowed at most twice?

For example,
Given sorted array nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var duplicate = false,
        len = nums.length,
        index = 1,
        i;
    
    for (i = 1; i < len; i++) {
        if (duplicate && nums[i] === nums[i - 1]) {
            continue;
        }
        
        if (nums[i] === nums[i - 1]) {
            duplicate = true;
        } else {
            duplicate = false;
        }
        
        nums[index] = nums[i];
        index++;
    }
    
    return index;
};
