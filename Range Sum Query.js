/**
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.
*/

/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    var len = nums.length,
        i;
        
    this.sums = [];
    this.sums[0] = 0;
        
    for (i = 0; i < len; i++) {
        this.sums[i + 1] = this.sums[i] + nums[i];
    }
    
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sums[j + 1] - this.sums[i];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
