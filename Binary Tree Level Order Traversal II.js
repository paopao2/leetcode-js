/**
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree {3,9,20,#,#,15,7},
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var result = [],
        parent = [],
        parentData,
        cur;
    
    if (root === null) {
        return result;
    }
    
    parent.push(root);
    
    while (parent.length > 0) {
        cur = [];
        parentData = [];
        
        for (var i in parent) {
            parent[i].left ? cur.push(parent[i].left) : null;
            parent[i].right? cur.push(parent[i].right) : null;
            parentData.push(parent[i].val);
        }
        
        result.unshift(parentData);
        
        parent = cur;
    }
    
    return result;
};
