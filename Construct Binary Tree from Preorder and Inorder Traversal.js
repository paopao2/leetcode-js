/**
Given preorder and inorder traversal of a tree, construct the binary tree.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    /**
    假设树的先序遍历是12453687，中序遍历是42516837。这里最重要的一点就是先序遍历可以提供根的所在，而根据中序遍历的性质知道根的所在就可以将序列分为左右子树。比如上述例子，我们知道1是根，所以根据中序遍历的结果425是左子树，而6837就是右子树。接下来根据切出来的左右子树的长度又可以在先序便利中确定左右子树对应的子序列（先序遍历也是先左子树后右子树）。根据这个流程，左子树的先序遍历和中序遍历分别是245和425，右子树的先序遍历和中序遍历则是3687和6837，我们重复以上方法，可以继续找到根和左右子树，直到剩下一个元素。可以看出这是一个比较明显的递归过程，对于寻找根所对应的下标，我们可以先建立一个HashMap，以免后面需要进行线行搜索，这样每次递归中就只需要常量操作就可以完成对根的确定和左右子树的分割。
    */
    var map = {},
        len = inorder.length,
        i;
    
    for (i = 0; i < len; i++) {
        map[inorder[i]] = i;
    }
    
    return helper(preorder, 0, len - 1, inorder, 0, len - 1, map);
};

function helper(preorder, preL, preR, inorder, inL, inR, map) {
    var root,
        index;
    
    if (preL > preR || inL > inR) {
        return null;
    }
    
    root = new TreeNode(preorder[preL]);
    index = map[root.val];
    
    root.left = helper(preorder, preL + 1, index - inL + preL, inorder, inL, index - 1, map);
    root.right = helper(preorder, index - inL + preL + 1, preR, inorder, index + 1, inR, map);
    
    return root;
}
