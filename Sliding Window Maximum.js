/**
Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

For example,
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Therefore, return the max sliding window as [3,3,5,5,6,7].

Note: 
You may assume k is always valid, ie: 1 ≤ k ≤ input array's size for non-empty array.

Follow up:
Could you solve it in linear time?

Hint:

How about using a data structure such as deque (double-ended queue)?
The queue size need not be the same as the window’s size.
Remove redundant elements and the queue should store only elements that need to be considered.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * Maintain an array for possible maximum value's index between [i - k + 1, i]
 * 
 * if arr[0] < i - k + 1, pop
 * 当下标i从队尾入队时，顺次弹出队列尾部不大于nums[i]的数组下标（这些被弹出的元素由于新元素的加入而变得没有意义）
 * 队头元素即为当前滑动窗口的最大值
 */
var maxSlidingWindow = function(nums, k) {
    var result = [],
        queue = [],
        len = nums.length,
        i;
    
    if (k > len || k === 0) {
        return result;
    }
    
    for (i = 0; i < len; i++) {
        while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[i]) {
            queue.pop();
        }
        
        if (queue[0] < i - k + 1) {
            queue.shift();
        }
        
        queue.push(i);
        
        if (i >= k - 1) {
            result.push(nums[queue[0]]);
        }
    }
    
    return result;
};
