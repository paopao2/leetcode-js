/**
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
You should return [1, 3, 4].
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    var queue = [],
        result = [],
        i,
        len;
    
    if (!root) {
        return result;
    }
    
    queue.push(root);
    
    while (queue.length > 0) {
        len = queue.length;
        
        for (i = 0; i < len; i++) {
            node = queue.shift();
            
            // first one is the right most
            if (i === 0) {
                result.push(node.val);
            }
            
            if (node.right) {
                queue.push(node.right);
            }
            
            if (node.left) {
                queue.push(node.left);
            }
        }
    }
    
    return result;
};
