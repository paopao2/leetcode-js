/**
Given an array of integers, every element appears three times except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var arr = [],
        len = nums.length,
        num,
        cur,
        result = 0,
        i,
        j;
    
    for (i = 0; i < 32; i++) {
        arr[i] = 0;
    }
    
    for (i = 0; i < len; i++) {
        num = nums[i];
        
        cur = num;
        for (j = 0; j < 32; j++) {
            if (cur === 0) {
                break;
            }
            
            arr[j] += (cur & 1);
            
            cur = (cur >> 1);
        }
    }
    
    for (i = 0; i < 32; i++) {
        result += ((arr[i] % 3) << i);
    }
    
    return result;
};
