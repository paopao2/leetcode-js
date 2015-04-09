/**
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {number}
 */
var maxDepth = function(root) {
    function getGreater(a, b) {
        return a > b? a : b;
    }
    if (root === null) {
        return 0;
    }
    return getGreater(maxDepth(root.left), maxDepth(root.right)) + 1;
};
