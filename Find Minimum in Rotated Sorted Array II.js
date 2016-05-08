/**
Follow up for "Find Minimum in Rotated Sorted Array":
What if duplicates are allowed?

Would this affect the run-time complexity? How and why?
Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

The array may contain duplicates.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var start = 0,
        end = nums.length - 1,
        mid;
        
    while (start < end) {
        mid = Math.floor((start + end) / 2);
        
        if (nums[mid] < nums[start]) {
            end = mid;
        } else if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else if (nums[mid] === nums[end] && nums[mid] === nums[start]) {
            end--;
        } else if (nums[mid] === nums[end]) {
            if (nums[mid] < nums[start]) {
                end = mid;
                start++;
            } else {
                end = mid - 1;
            }
        } else if (nums[mid] === nums[start]) {
            if (nums[mid] > nums[end]) {
                start = mid + 1;
            } else {
                start = mid;
                end--;
            }
        } else {
            return nums[start];
        }
    }
    
    return nums[start];
};


// SOLUTION 2
var findMin = function(nums) {
    var start = 0,
        end = nums.length - 1,
        mid;
        
    while (start < end) {
        mid = Math.floor((start + end) / 2);
        
        if (nums[mid] < nums[start]) {
            end = mid;
        } else if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else {
            end--;
        }
    }
    
    return nums[start];
};
