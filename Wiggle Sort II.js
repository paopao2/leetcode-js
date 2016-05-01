/**
Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

Example:
(1) Given nums = [1, 5, 1, 1, 6, 4], one possible answer is [1, 4, 1, 5, 1, 6]. 
(2) Given nums = [1, 3, 2, 2, 3, 1], one possible answer is [2, 3, 1, 3, 1, 2].

Note:
You may assume all input has valid answer.

Follow Up:
Can you do it in O(n) time and/or in-place with O(1) extra space?
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    var len = nums.length,
        temp = [],
        midIndex = parseInt((len + 1) / 2),
        i,
        l,
        r,
        medium;
        
    medium = findKth(0, len - 1, midIndex, nums);
    
    for (i = 0, l = 0, r = len - 1; i < len; i++) {
        if (nums[i] < medium) {
            temp[l++] = nums[i];
        } else if (nums[i] > medium) {
            temp[r--] = nums[i];
        }
    }
    
    while (l < midIndex) {
        temp[l++] = medium;
    }
    
    while (r >= midIndex) {
        temp[r--] = medium;
    }
    
    r = len;
    
    for (i = 0; i < len; i++) {
        nums[i] = (i & 1) === 0? temp[--l] : temp[--r];
    }
};

function findKth(start, end, k, nums) {
    if (start >= end) {
        return nums[end];
    }
    
    var index = partition(start, end, nums),
        count = index - start + 1;
    
    if (count === k) {
        return nums[index];
    }
    
    if (count < k) {
        return findKth(index + 1, end, k - count, nums);
    }
    
    return findKth(start, index - 1, k, nums);
}

function partition(start, end, nums) {
    var val = nums[start],
        i,
        j;
    
    i = start + 1;
    j = end;
    
    while (true) {
        while (nums[i] <= val) {
            i++;
        }
        
        while (nums[j] > val) {
            j--;
        }
        
        if (i >= j) {
            break;
        }
        
        swap(nums, i, j);
    }
    
    swap(nums, j, start);
    
    return j;
}

function swap(nums, i, j) {
    var temp = nums[i];
    
    nums[i] = nums[j];
    nums[j] = temp;
}
