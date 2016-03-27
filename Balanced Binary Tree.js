/**
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    return findDepth(root) === -1 ? false : true;
};

function findDepth(root) {
    if (root === null) {
        return 0;
    }
    
    var leftDepth = findDepth(root.left),
        rightDepth;
        
    if (leftDepth === -1) {
        return -1;
    }
    
    rightDepth = findDepth(root.right);
    
    if (rightDepth === -1) {
        return -1;
    }
    
    if (Math.abs(leftDepth - rightDepth) > 1) {
        return -1;
    }
    
    return Math.max(leftDepth, rightDepth) + 1;
}
