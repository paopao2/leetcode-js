/**
Given an array of integers, find out whether there are two distinct indices i and j in the array such that the difference between nums[i] and nums[j] is at most t and the difference between i and j is at most k.
*/

/**
The idea is like the bucket sort algorithm. Suppose we have consecutive buckets covering the range of nums with each bucket a width of (t+1). If there are two item with difference <= t, one of the two will happen:

(1) the two in the same bucket
(2) the two in neighbor buckets

*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    var len = nums.length,
        map = {},
        id,
        i;
    
    if (t < 0) {
        return false;
    }
    
    for (i = 0; i < len; i++) {
        id = getBucketId(nums[i], t + 1);
        
        if (map.hasOwnProperty(id)) {
            return true;
        } 
        
        if (map.hasOwnProperty(id - 1) && Math.abs(map[id - 1] - nums[i]) <= t) {
            return true;
        }
        
        if (map.hasOwnProperty(id + 1) && Math.abs(map[id + 1] - nums[i]) <= t) {
            return true;
        }
        
        map[id] = nums[i];
        
        if (i >= k) {
            delete map[getBucketId(nums[i - k], t + 1)];
        }
    }
    
    return false;
};

function getBucketId(num, bucketLength) {
    return Math.floor(num / bucketLength);
}
