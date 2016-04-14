/**

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var len = nums.length,
        arr = [],
        i,
        j,
        max = 1;
    
    if (len === 0) {
        return 0;
    }
    
    for (i = 0; i < len; i++) {
        arr[i] = 1;
        for (j = 0; j < i; j++) {
            if ((nums[i] > nums[j]) && (arr[j] + 1 > arr[i])) {
                arr[i] = arr[j] + 1;
            }
            
            max = Math.max(max, arr[i]);

        }
    }
    
    return max;
};
