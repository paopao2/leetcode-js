/**
Given a binary tree, flatten it to a linked list in-place.

For example,
Given

         1
        / \
       2   5
      / \   \
     3   4   6
The flattened tree should look like:
   1
    \
     2
      \
       3
        \
         4
          \
           5
            \
             6

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    var queue = [],
        node,
        len,
        i;

    helper(root, queue);
    
    len = queue.length;
    for (i = 0; i < len; i++) {
        node = queue.shift();
        node.left = null;
        node.right = queue.length > 0? queue[0] : null;
    }
};

function helper(root, queue) {
    if (!root) {
        return;
    }
    
    queue.push(root);
    helper(root.left, queue);
    helper(root.right, queue);
}


// SOLUTION 2
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
 * 假设某节点的左右子树T(root->left)和T(root->right)已经flatten成linked list了：

    1
  /    \
 2     5
  \       \
   3      6 <- rightTail
     \
      4  <- leftTail

如何将root、T(root->left)、T(root->right) flatten成一整个linked list？显而易见：

temp = root->right
root->right  = root->left
root->left = NULL
leftTail->right = temp

 */
var flatten = function(root) {
    helper(root);
};

// return tail node
function helper(root) {
    if (!root) {
        return;
    }
    
    var leftTail = helper(root.left),
        rightTail = helper(root.right),
        temp;
        
        
    if (root.left) {
        temp = root.right;
        root.right = root.left;
        root.left = null;
        leftTail.right = temp;
    }
    
    if (rightTail) {
        return rightTail;
    }
    
    if (leftTail) {
        return leftTail;
    }
    
    return root;
}
