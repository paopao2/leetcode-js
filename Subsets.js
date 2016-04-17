/**
Given a set of distinct integers, nums, return all possible subsets.

Note:
Elements in a subset must be in non-descending order.
The solution set must not contain duplicate subsets.
For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var result = [],
        len = nums.length;
    
    nums.sort(function(a, b) {
        return a - b;
    });
    
    helper(nums, 0, len - 1, [], result);
    
    return result;
};

function helper(nums, start, end, curArr, result) {
    result.push(curArr);
    
    var i;
    
    for (i = start; i <= end; i++) {
        curArr.push(nums[i]);
        helper(nums, i + 1, end, curArr.concat(), result);
        curArr.pop();
    }
}
