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
var maxPathSum = function(root) {
    var max = [];
    
    max[0] = Number.NEGATIVE_INFINITY;
    getMaxValueToParent(root, max);
    
    return max[0];
};

/**
* This function returns the max value that contains current node to its parent
*/
function getMaxValueToParent(root, max) {
    if (root === null) {
        return 0;
    }
    
    var left = getMaxValueToParent(root.left, max),
        right = getMaxValueToParent(root.right, max),
        maxPathAcrossRootNotToParent = root.val + left + right, // path that contains current node and will not go to its parent
        maxPathAcrossRootToParent = Math.max(root.val, root.val + Math.max(left, right));
        
    max[0] = Math.max(max[0], maxPathAcrossRootNotToParent, maxPathAcrossRootToParent);
    
    return maxPathAcrossRootToParent;
}
