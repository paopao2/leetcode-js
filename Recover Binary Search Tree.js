/**
Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

Note:
A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?
*/

// SOLUTION 1: O(N)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let array = [];
    treeToArray(root, array);
    
    let node1, node2;
    
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i][0] > array[i + 1][0]) {
            if (!node1) {
                node1 = array[i][1];
                node2 = array[i + 1][1];
            } else {
                node2 = array[i + 1][1];
            }
        }
    }
    
    let temp = node1.val;
    node1.val = node2.val;
    node2.val = temp;
};

function treeToArray(root, array) {
    if (!root) {
        return;
    }
    
    treeToArray(root.left, array);
    array.push([root.val, root]);
    treeToArray(root.right, array);
}


// SOLUTION 2: constant space
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let array = [];
    inorderTraverse(root, array);
    
    let node1 = array[1];
    let node2 = array[2];
    
    let temp = node1.val;
    node1.val = node2.val;
    node2.val = temp;
};

function inorderTraverse(root, array) {
    if (!root) {
        return;
    }
    
    inorderTraverse(root.left, array);
    
    if (array[0] && array[0].val > root.val) {
        if (!array[1]) {
            array[1] = array[0];
            array[2] = root;
        } else {
            array[2] = root;
        }
        
    }
    array[0] = root;
    
    inorderTraverse(root.right, array);
}
