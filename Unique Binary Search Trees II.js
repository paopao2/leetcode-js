/**
Given n, generate all structurally unique BST's (binary search trees) that store values 1...n.

For example,
Given n = 3, your program should return all 5 unique BST's shown below.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    
    return genTreeHelper(1, n);
};

function genTreeHelper(start, end) {
    var result = [],
        left,
        right,
        node,
        i,
        j,
        k;
    
    if (start > end) {
        return [null];
    }
    
    for (i = start; i <= end; i++) {
        left = genTreeHelper(start, i - 1);
        right = genTreeHelper(i + 1, end);
        for (k = 0; k < left.length; k++) {
            for (j = 0; j < right.length; j++) {
                node = new TreeNode(i);
                node.left = left[k];
                node.right = right[j];
                result.push(node);
            }
        }
    }
    
    return result;
}
