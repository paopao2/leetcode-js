/**
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example,
Given [100, 4, 200, 1, 3, 2],
The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

Your algorithm should run in O(n) complexity.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var len = nums.length,
        map = {}, // key is nums[i], value is i
        visited = [],
        maxLen = 0,
        left,
        right,
        curLen,
        i;
        
    for (i = 0; i < len; i++) {
        map[nums[i]] = i;
    }
    
    for (var val in map) {
        i = map[val];
        
        if (visited[i]) {
            continue;
        }
        
        val = parseInt(val);
        left = val - 1;
        right = val + 1;
        curLen = 1;
        
        while (map.hasOwnProperty(left)) {
            visited[map[left]] = true;
            curLen++;
            left--;
            
        }
        
        while (map.hasOwnProperty(right)) {
            visited[map[right]] = true;
            curLen++;
            right++;
        }
        
        if (curLen > maxLen) {
            maxLen = curLen;
        }
    }
    
    return maxLen;
};
