/**
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (root === null) {
        return false;
    }
    
    return hasFound(root, sum, 0);
};

function hasFound(node, target, curSum) {
    if (node === null) {
        return false;
    }
    
    var sum = node.val + curSum;
    
    if (sum === target && !node.left && !node.right) {
        return true;
    }
    
    return hasFound(node.left, target, sum) || hasFound(node.right, target, sum);
}
