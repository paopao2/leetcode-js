/**

Given a binary tree, return the preorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [1,2,3].

Note: Recursive solution is trivial, could you do it iteratively

 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {number[]}
 */
var preorderTraversal = function(root) {
    var store = [],
        result = [],
        cur;
    if (root === null) {
        return store;
    }
    store.push(root);
    while(store.length > 0) {
        cur = store.pop();
        result.push(cur.val);
        if (cur.right) {
            store.push(cur.right);
        }
        if (cur.left) {
            store.push(cur.left);
        }
    }
    return result;
};
