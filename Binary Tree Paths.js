/**
Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"]
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var result = [];
    
    getPaths(root, null, result);
    
    return result;
};

function getPaths(node, curStr, result) {
    if (node === null) {
        return;
    }
    
    if (!curStr) {
        curStr = '' + node.val;
    } else {
        curStr += '->' + node.val;
    }
    
    if (node.left) {
        getPaths(node.left, curStr, result);
    }
    
    if (node.right) {
        getPaths(node.right, curStr, result);
    }
    
    if (!node.left && !node.right) {
        result.push(curStr);
    }
}
