/**
Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    var iLen = inorder.length,
        pLen = postorder.length;
        
    return getRoot(inorder, postorder, 0, iLen - 1, 0, pLen - 1);
};

function getRoot(inorder, postorder, iStart, iEnd, pStart, pEnd) {
    if (iStart > iEnd || pStart > pEnd) {
        return null;
    }
    
    var value = postorder[pEnd],
        node = new TreeNode(value),
        index = inorder.indexOf(value);
        
    node.left = getRoot(inorder, postorder, iStart, index - 1, pStart, pStart + index - iStart - 1);
    node.right = getRoot(inorder, postorder, index + 1, iEnd, pStart + index - iStart, pEnd - 1);
    
    return node;
}
