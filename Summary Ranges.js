/**
Given a sorted integer array without duplicates, return the summary of its ranges.

For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var len = nums.length,
        result = [],
        curStr = '',
        curLen,
        curNum,
        i;
        
    if (len === 0) {
        return result;
    }
    
    curNum = nums[0];
    curStr += curNum;
    curLen = 1;
    
    for (i = 1; i < len; i++) {
        if (curNum + 1 === nums[i]) {
            curNum++;
            curLen++;
        } else {
            if (curLen > 1) {
                curStr += '->' + curNum;
            }
            
            result.push(curStr);
            curNum = nums[i];
            curLen = 1;
            curStr = '' + curNum;
        }
    }
    
    if (curLen > 1) {
        curStr += '->' + curNum;
    }
            
    result.push(curStr);
    return result;
};
