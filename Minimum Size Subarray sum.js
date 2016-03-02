/**
Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn't one, return 0 instead.

For example, given the array [2,3,1,2,4,3] and s = 7,
the subarray [4,3] has the minimal length under the problem constraint.

click to show more practice.

More practice:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).
*/
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
// O(n) solution
var minSubArrayLen = function(s, nums) {
    var len = nums.length,
        left = 0,
        right = 0,
        sum = 0,
        result = Number.MAX_VALUE;
        
    if (len === 0) {
        return 0;
    }
    
    sum += nums[left];
    
    while (right < len) {
        while (sum < s && right < len) {
            right++;
            sum += nums[right];
        }
        
        while (sum >= s) {
            result = Math.min(result, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    
    if (result === Number.MAX_VALUE) {
        return 0;
    }
    
    return result;
};


//O(nlgn) solution
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var len = nums.length,
        right = 0,
        sums = [],
        result = Number.MAX_VALUE,
        i;
        
    if (len === 0) {
        return 0;
    }
    
    sums[0] = 0;
    
    for (i = 1; i <= len; i++) {
        sums[i] = nums[i - 1] + sums[i - 1];
    }
    
    for (i = 0; i <= len; i++) {
        right = findRight(i + 1, len, s + sums[i], sums);
        
        if (right === len + 1) {
            break;
        }
        
        if (result > right - i) {
            result = right - i;
        }
    }
    
    return result === Number.MAX_VALUE? 0 : result;
};

function findRight(left, right, key, sums) {
    var mid;
    
    while (left <= right) {
        mid = Math.floor((left + right)/2);
        if (sums[mid] >= key) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}
