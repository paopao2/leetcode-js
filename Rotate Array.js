/**
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var n = nums.length,
        divider,
        pre,
        tmp,
        i,
        j;
        
    k = k % n;
    divider = gcd_rec(k, n);
    
    for (i = 0; i < divider; i++) {
        pre = nums[i];
        j = i;
        
        while ((j + k) % n !== i) {
            tmp = nums[(j + k) % n];
            nums[(j + k) % n] = pre;
            pre = tmp;
            j = (j + k) % n;
        }
        
        nums[(j + k) % n] = pre;
    }
};

function gcd_rec(a, b) {
    if (b) {
        return gcd_rec(b, a % b);
    } else {
        return Math.abs(a);
    }
}
