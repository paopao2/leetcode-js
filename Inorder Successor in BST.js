/**
 Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

Note: If the given node has no in-order successor in the tree, return null. 
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
 * @param {TreeNode} p
 * @return {TreeNode}
 * 
 * The inorder successor of p is either p's parent or the left most child of p's right child
 */
var inorderSuccessor = function(root, p) {
    if (!root) {
        return null;
    }
    
    if (root.val <= p.val) {
        return inorderSuccessor(root.right, p);
    }
    
    let leftMostChild = inorderSuccessor(root.left, p);
    return leftMostChild ? leftMostChild : root;
};
