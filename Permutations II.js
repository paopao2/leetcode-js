/**
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

For example,
[1,1,2] have the following unique permutations:
[1,1,2], [1,2,1], and [2,1,1].
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var len = nums.length,
        result = [];
    
    nums.sort(function(a, b) {
        return a - b;
    });
    
    genPerm(result, 0, len, [], [], nums);
    
    return result;
};

function genPerm(result, index, len, curArr, used, nums) {
    if (curArr.length === len) {
        result.push(curArr);
        return;
    }
    
    var i;
    
    for (i = 0; i < len; i++) {
        if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
            continue;
        }
        
        curArr.push(nums[i]);
        used[i] = true;
        genPerm(result, i + 1, len, curArr.concat(), used.concat(), nums);
        used[i] = false;
        curArr.pop();
    }
}