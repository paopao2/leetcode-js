/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    y = 0;
    var temp;
    for (var i= 0; i < nums.length; i++) {
        if (nums[i]) {
            temp = nums[i];
            nums[i] = nums[y];
            nums[y] = temp;
            y += 1;
        }
    }
};
