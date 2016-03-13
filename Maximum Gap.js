/**
Given an unsorted array, find the maximum difference between the successive elements in its sorted form.

Try to solve it in linear time/space.

Return 0 if the array contains less than 2 elements.

You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    var length = nums.length,
        bucket = [],
        max = Number.MIN_VALUE,
        min = Number.MAX_VALUE,
        gap = 0,
        bLen,
        bIndex,
        prev,
        i;
        
    if (length < 2) {
        return 0;
    }
    
    for (i = 0; i < length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
        
        if (nums[i] < min) {
            min = nums[i];
        } 
    }
    
    // length of each bucket
    bLen = Math.floor((max - min) / length) + 1;
    
    for (i = 0; i < length; i++) {
        bIndex = Math.floor((nums[i] - min) / bLen);
        
        if (!bucket[bIndex]) {
            bucket[bIndex] = [];
            bucket[bIndex].push(nums[i]);
            bucket[bIndex].push(nums[i]);
        } else {
            if (nums[i] < bucket[bIndex][0]) {
                bucket[bIndex][0] = nums[i];
            } else if (nums[i] > bucket[bIndex][1]) {
                bucket[bIndex][1] = nums[i];
            }
        }
    }
    
    length = bucket.length;
    prev = 0;
    
    for (i = 1; i < length; i++) {
        if (!bucket[i]) {
            continue;
        }
        
        gap = Math.max(gap, bucket[i][0] - bucket[prev][1]);
        prev = i;
    }
    
    return gap;
};
