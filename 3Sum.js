/**
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:
Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
The solution set must not contain duplicate triplets.
    For example, given array S = {-1 0 1 2 -1 -4},

    A solution set is:
    (-1, 0, 1)
    (-1, -1, 2)

*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
    });
    
    var len = nums.length,
        i,
        result = [],
        curSol = [];
        
    for (i = 0; i < len; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        } 
        
        curSol.push(nums[i]);
        twoSum(result, curSol.concat(), i + 1, len - 1, -nums[i], nums);
        curSol.pop();
    }
    
    return result;
};

function twoSum(allSol, curSol, startIndex, endIndex, target, nums) {
    var start = startIndex,
        end = endIndex,
        sum,
        mid;
    
    while (start < end) {
       sum = nums[start] + nums[end];
       
       if (sum === target) {
           curSol.push(nums[start]);
           curSol.push(nums[end]);
           allSol.push(curSol.concat());
           curSol.pop();
           curSol.pop();
           
           start++;
           end--;
           
           while (nums[start] === nums[start - 1]) {
               start++;
           }
           
           while (nums[end] === nums[end + 1]) {
               end--;
           }
       } else if (sum < target) {
           start++;
       } else {
           end--;
       }
    }
}
