/**
Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var len = nums.length,
        start = 0,
        end = len - 1,
        mid;
        
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[start] <= nums[mid]) {// left side sorted
            if (nums[mid] > target && nums[start] <= target) {
                // nums[mid] !== target, can safely do end = mid - 1
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else { // right side sorted
            if (nums[mid] < target && nums[end] >= target) {
                // nums[mid] !== target, can safely do start = mid + 1
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    
    return -1;
};
