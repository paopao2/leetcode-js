/**
Follow up for "Search in Rotated Sorted Array":
What if duplicates are allowed?

Would this affect the run-time complexity? How and why?

Write a function to determine if a given target is in the array.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var len = nums.length,
        start = 0,
        end = len - 1,
        mid;
        
    while (start <= end) {
        mid = parseInt((start + end) / 2);
        
        if (nums[mid] === target) {
            return true;
        }
        
        if (nums[mid] < nums[end]) { // right half sorted
            if (nums[mid] < target && nums[end] >= target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else if (nums[mid] > nums[end]) { // left half sorted
            if (nums[mid] > target && nums[start] <= target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else { // don't know which half is sorted
            end--;
        }
    }
    
    return false;
};
