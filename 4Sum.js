/**
Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:
Elements in a quadruplet (a,b,c,d) must be in non-descending order. (ie, a ≤ b ≤ c ≤ d)
The solution set must not contain duplicate quadruplets.
    For example, given array S = {1 0 -1 0 -2 2}, and target = 0.

    A solution set is:
    (-1,  0, 0, 1)
    (-2, -1, 1, 2)
    (-2,  0, 0, 2)
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort(function(a, b) {
        return a - b;
    });
     
    var len = nums.length,
        result = [],
        i;
        
    kSum(result, [], 4, nums, target, 0, len - 1);
    
    return result;
};

function kSum(result, curArr, k, nums, target, startIndex, endIndex) {
    var len = nums.length,
        start,
        end,
        sum,
        i;
    
    if (k >= 3) {
        for (i = startIndex; i <= endIndex; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) {
                continue;
            }
            
            curArr.push(nums[i]);
            kSum(result, curArr.concat(), k - 1, nums, target - nums[i], i + 1, endIndex);
            curArr.pop();
        }
    }
    
    if (k === 1) {
        for (i = startIndex; i <= endIndex; i++) {
            if (nums[i] === target) {
                result.push(nums[i]);
            }
        }
    }
    
    if (k === 2) {
        start = startIndex;
        end = endIndex;
        
        while (start < end) {
            sum = nums[start] + nums[end];
            
            if (sum === target) {
                curArr.push(nums[start]);
                curArr.push(nums[end]);
                result.push(curArr.concat());
                curArr.pop();
                curArr.pop();
                
                start++;
                end--;
                
                while(nums[start] === nums[start - 1]) {
                    start++;
                }
                
                while(nums[end] === nums[end + 1]) {
                    end--;
                }
            } else if (sum < target) {
                start++;
            } else {
                end--;
            }
        }
    }
}
