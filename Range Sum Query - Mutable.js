/**
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

The update(i, val) function modifies nums by updating the element at index i to val.
Example:
Given nums = [1, 3, 5]

sumRange(0, 2) -> 9
update(1, 2)
sumRange(0, 2) -> 8
Note:
The array is only modifiable by the update function.
You may assume the number of calls to update and sumRange function is distributed evenly.
*/
/**
 * @constructor
 * @param {number[]} nums
 */
// time limit exceeded...
var NumArray = function(nums) {
    this.nums = nums;
    
    var length = nums.length,
        i,
        j,
        sum = [];
        
    for (i = 0; i < length; i++) {
        sum.push(new Array(length));
    }
    
    for (i = 0; i < length; i++) {
        for (j = i; j < length; j++) {
            if (i === j) {
                sum[i][j] = nums[i];
            } else {
                sum[i][j] = sum[i][j - 1] + nums[j];
            }
        }
    }
    
    this.sum = sum;
    this.len = length;
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    var diff = val - this.nums[i],
        m,
        n;
        
    this.nums[i] = val;
    
    for (m = 0; m <= i; m++) {
        for (n = i; n < this.len; n++) {
            this.sum[m][n] += diff;
        }
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sum[i][j];
};

// Segment Tree solution
/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    var length = nums.length,
        i,
        arr = [];
        
    for (i = 0; i < length; i++) {
        arr[i + length] = nums[i];
    }
    
    for (i = length - 1; i > 0; i--) {
        arr[i] = arr[2 * i] + arr[2 * i + 1]; 
    }
    
    this.arr = arr;
    this.len = length;
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    i += this.len;
    
    this.arr[i] = val;
    
    while (i > 0) {
        i = Math.floor(i / 2);
        this.arr[i] = this.arr[i * 2] + this.arr[i * 2 + 1];
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    var sum = 0,
        l = i + this.len,
        r = j + this.len;
    
    while (l <= r) {
        if (l % 2 === 1) {
            sum += this.arr[l];
            l++;
        }
        
        if (r % 2 === 0) {
            sum += this.arr[r];
            r--;
        }
        
        l = Math.floor(l / 2);
        r = Math.floor(r / 2);
    }
    
    return sum;
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.update(1, 10);
 * numArray.sumRange(0, 2);
 */
