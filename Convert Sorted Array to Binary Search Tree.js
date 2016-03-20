/**
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    var len = nums.length;
    
    if (len === 0) {
        return null;
    }
    
    return getRoot(nums, 0, len - 1);
};


function getRoot(nums, start, end) {
    if (start > end) {
        return null;
    }
    
    var mid = Math.floor((start + end) / 2),
        node = new TreeNode(nums[mid]);
    
    node.left = getRoot(nums, start, mid - 1);
    node.right = getRoot(nums, mid + 1, end);
    
    return node;
}
