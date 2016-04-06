/**
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var map = {},
        len = nums.length,
        i;
    
    for (i = 0; i < len; i++) {
        if (map.hasOwnProperty(nums[i])) {
            if (i - map[nums[i]] <= k) {
                return true;
            }
            
            map[nums[i]] = i;
        } else {
            map[nums[i]] = i;
        }
    }
    
    return false;
};
