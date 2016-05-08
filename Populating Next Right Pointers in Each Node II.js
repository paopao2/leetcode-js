/**
Follow up for problem "Populating Next Right Pointers in Each Node".

What if the given tree could be any binary tree? Would your previous solution still work?

Note:

You may only use constant extra space.
For example,
Given the following binary tree,
         1
       /  \
      2    3
     / \    \
    4   5    7
After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL
Subscribe to see which companies asked this question
*/
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (!root) {
        return;
    }
    
    var curRow = [],
        nextRow = [],
        i;
        
    curRow.push(root);
    
    while (curRow.length > 0) {
        for (i = 0; i < curRow.length; i++) {
            if (curRow[i].left) {
                nextRow.push(curRow[i].left);
            }
            
            if (curRow[i].right) {
                nextRow.push(curRow[i].right);
            }
            
            if (i < curRow.length - 1) {
                curRow[i].next = curRow[i + 1];
            } else {
                curRow[i].next = null;
            }
        }
        
        curRow = nextRow;
        nextRow = [];
    }
};
