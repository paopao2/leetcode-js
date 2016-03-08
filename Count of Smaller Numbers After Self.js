/**
You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

Example:

Given nums = [5, 2, 6, 1]

To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
Return the array [2, 1, 1, 0].
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 将给定数组从最后一个开始，用二分法插入到一个新的数组，这样新数组就是有序的，那么此时该数字在新数组中的坐标就是原数组中其右边所有较小数字的个数
 */
var countSmaller = function(nums) {
    var result = [],
        tmp = [],
        len = nums.length,
        left,
        right,
        mid,
        i; // array for sorting nums
        
    for (i = len - 1; i >= 0; i--) {
        left = 0;
        right = tmp.length;
        
        while (left < right) {
            mid = Math.floor((left + right) / 2);
            if (tmp[mid] >= nums[i]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        result[i] = right;
        tmp.splice(right, 0, nums[i]);
    }
    
    return result;
};
