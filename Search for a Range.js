/**
Given a sorted array of integers, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].


*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var result = [],
        leftIndex = findLeftMost(target, nums),
        rightIndex = findRightMost(target, nums);
    
    result.push(leftIndex);    
    result.push(rightIndex);
    
    return result;
};

function findLeftMost(target, nums) {
    var len = nums.length,
        start = 0,
        end = len - 1,
        mid;
        
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        
        if (nums[mid] > target) {
            end = mid - 1;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    if (start >= 0 && start < len && nums[start] === target) {
        return start;
    }
    
    return -1;
}

function findRightMost(target, nums) {
    var len = nums.length,
        start = 0,
        end = len - 1,
        mid;
        
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        
        if (nums[mid] > target) {
            end = mid - 1;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            start = mid + 1;
        }
    }
    
    if (end >= 0 && end < len && nums[end] === target) {
        return end;
    }
    
    return -1;
}
