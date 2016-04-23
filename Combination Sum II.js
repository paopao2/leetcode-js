/**
Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

Each number in C may only be used once in the combination.

Note:
All numbers (including target) will be positive integers.
Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).
The solution set must not contain duplicate combinations.
For example, given candidate set 10,1,2,7,6,1,5 and target 8, 
A solution set is: 
[1, 7] 
[1, 2, 5] 
[2, 6] 
[1, 1, 6] 
*/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var len = candidates.length,
        result = [],
        i,
        j;
    
    candidates.sort(function(a, b) {
        return a - b;
    });
    
    genSum(result, target, [], 0, 0, candidates);
    
    return result;
};

function genSum(result, target, curArr, index, curSum, nums) {
    if (curSum === target) {
        result.push(curArr);
        return;
    }
    
    if (curSum > target || index === nums.length) {
        return;
    }
    
    var len = nums.length,
        i;
    
    for (i = index; i < len; i++) {
        if (i > index && (nums[i] === nums[i - 1])) {
            continue;
        }
        
        curArr.push(nums[i]);
        genSum(result, target, curArr.concat(), i + 1, curSum + nums[i], nums);
        curArr.pop();
    }
}
