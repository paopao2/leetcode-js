/**
The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.

Example 1:
     3
    / \
   2   3
    \   \ 
     3   1
Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
Example 2:
     3
    / \
   4   5
  / \   \ 
 1   3   1
Maximum amount of money the thief can rob = 4 + 5 = 9.
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
 * @return {number}
 */
var rob = function(root) {
    var result = dfsRob(root);
    
    return Math.max(result[0], result[1]);
};

// return an array to keep 2 values: 
// the maximum money when a root is selected and the maximum value when a root if NOT selected.
function dfsRob(root) {
    if (!root) {
        return [0, 0];
    }
    
    var left = dfsRob(root.left),
        right = dfsRob(root.right),
        includeRootVal,
        noRootVal;
    
    includeRootVal = left[1] + right[1] + root.val;
    noRootVal = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    
    return [includeRootVal, noRootVal];
}
