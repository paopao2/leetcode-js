/**
Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

You may assume no duplicate exists in the array.
*/

// O(N) solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var len = nums.length,
        i;
    
    if (len === 0) {
        return null;
    }
    
    for (i = 1; i < len; i++) {
        if (nums[i] < nums[i - 1]) {
            return nums[i];
        }
    }
    
    return nums[0];
};

// O(logN) solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var len = nums.length,
        start = 0,
        end = len - 1,
        mid;
    
    while (start < end) {
        mid = parseInt((start + end) / 2);
        
        if (nums[mid] < nums[start]) {
            end = mid;
        } else if (nums[end] < nums[mid]) {
            start = mid + 1;
        } else {
            return nums[start];
        }
    }
    
    return nums[start];
};
