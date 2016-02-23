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
var isValidBST = function(root) {
    return isValidBSTHelper(root, null, null);
};

function isValidBSTHelper(root, min, max) {
    if (root === null) {
        return true;
    }
    
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
        return false;
    }
    
    return isValidBSTHelper(root.left, min, root.val) && isValidBSTHelper(root.right, root.val, max);
}
