/**
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
return
[
   [5,4,11,2],
   [5,8,4,5]
]
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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    var result = [];
    
    if (!root) {
        return result;
    }
    
    genPath(result, root, [], 0, sum);
    
    return result;
};

function genPath(result, root, curArr, curSum, target) {
    curArr.push(root.val);
    curSum += root.val;
    
    if ((curSum === target) && !root.left && !root.right) {
        result.push(curArr);
        return;
    }
    
    if (root.left) {
        genPath(result, root.left, curArr.concat(), curSum, target);
    }
    
    if (root.right) {
        genPath(result, root.right, curArr.concat(), curSum, target);
    }
}
