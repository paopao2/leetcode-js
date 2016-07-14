/**
Given a sorted integer array where the range of elements are [lower, upper] inclusive, return its missing ranges.

For example, given [0, 1, 3, 50, 75], lower = 0 and upper = 99, return ["2", "4->49", "51->74", "76->99"]. 
*/
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    let start, prev, end;
    let result = [];
    const len = nums.length;
    
    if (len === 0) {
        if (lower === upper) {
            result.push(lower + '');
        } else {
            result.push(lower + '->' + upper);
        }
        
        return result;
    }
    
    start = nums[0];
    prev = nums[0];
    
    if (start > lower) {
        start--;
        
        if (lower === start) {
            result.push(lower + '');
        } else {
            result.push(lower + '->' + start);
        }
    }
    
    for (let i = 1; i < len; i++) {
        if (nums[i] > prev + 1) {
            start = prev + 1;
            end = nums[i] - 1;
            
            if (start === end) {
                result.push(start + '');
            } else {
                result.push(start + '->' + end);
            }
        }
        
        prev = nums[i];
    }
    
    if (prev + 1 === upper) {
        result.push(upper + '');
    } else if (prev + 1 < upper) {
        result.push(prev + 1 + '->' + upper);
    }
    
    return result;
};
