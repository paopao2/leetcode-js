/**
Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for this problem.

click to show follow up.

Follow up:
A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

Could you come up with an one-pass algorithm using only constant space?

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var len = nums.length,
        redEnds = 0,
        blueStarts = len - 1,
        i;
    
    function swap(m, n, arr) {
        var temp = arr[m];
        
        arr[m] = arr[n];
        arr[n] = temp;
    }

    for (i = 0; i <= blueStarts;) {
        if (nums[i] === 0) {
            swap(i, redEnds, nums);
            i++;
            redEnds++;
        } else if (nums[i] === 2) {
            swap(i, blueStarts, nums);
            blueStarts--;
        } else {
            i++;
        }
    }
};
