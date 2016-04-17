/**
Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

For example,

    1
   / \
  2   3
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.

Return the sum = 12 + 13 = 25.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    var arr = [0];
    
    helper(root, 0, arr);
    
    return arr[0];
};

function helper(node, sum, arr) {
    if (!node) {
        return;
    }
    
    sum = sum*10 + node.val;
    
    if (!node.left && !node.right) {
        arr[0] += sum;
        return;
    }
    
    if (node.left) {
        helper(node.left, sum, arr);
    }
    
    if (node.right) {
        helper(node.right, sum, arr);
    }
    
}
