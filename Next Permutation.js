/**
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var len = nums.length,
        partiIndex,
        switchIndex,
        cur,
        i,
        k;
    
    if (len === 0 || len === 1) {
        return;
    }
    
    //find the num which breaks the increasing from the end
    for (i = len - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            partiIndex = i - 1;
            break;
        }
    }
    
    if (partiIndex === undefined) {
        for (i = 0; i < len/2 ; i++) {
            cur = nums[i];
            nums[i] = nums[len - i - 1];
            nums[len - i - 1] = cur;
        }
    } else {
        //find the number that it can be switched with
        cur = nums[partiIndex];
        for(i = len - 1; i > partiIndex; i--) {
            if (nums[i] > cur) {
                switchIndex = i;
                break;
            }
        }
    
        nums[partiIndex] = nums[switchIndex];
        nums[switchIndex] = cur;
        
        for (i = 0; i < (len - 1 - partiIndex)/2 ; i++) {
            k = i + partiIndex + 1;
            cur = nums[k];
            nums[k] = nums[len - 1 - i];
            nums[len - 1 - i] = cur;
        }
    
    }

};
