/**
Find the contiguous subarray within an array (containing at least one number) which has the largest product.

For example, given the array [2,3,-2,4],
the contiguous subarray [2,3] has the largest product = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * max_product[i] = max(max_product[i-1]*A[i], min_product[i-1]*A[i], A[i]) 
 * min_product[i] = min(max_product[i-1]*A[i], min_product[i-1]*A[i], A[i]) 
 */
var maxProduct = function(nums) {
    var curMax,
        curMin,
        len = nums.length,
        i,
        result,
        temp;
        
    if (len === 0) {
        return 0;
    }
    
    curMax = curMin = result = nums[0];
    
    for (i = 1; i < len; i++) {
        temp = curMax;
        curMax = Math.max(temp * nums[i], curMin * nums[i], nums[i]);
        curMin = Math.min(temp * nums[i], curMin * nums[i], nums[i]);
        
        result = Math.max(result, curMax);
    }
    
    return result;
};
