/**
Given a complete binary tree, count the number of nodes.

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
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
var countNodes = function(root) {
    if (root === null) {
        return 0;
    }
    
    var tmp = root,
        totalDep = 0,
        nodeNumsInLastLevel = 0,
        node = root,
        curDep,
        depSplit;
    
    while (tmp) {
        tmp = tmp.left;
        totalDep++;
    }
    
    curDep = 1;
    while (curDep < totalDep) {
        depSplit = findSplit(node);
        
        if (depSplit + curDep === totalDep) {
            nodeNumsInLastLevel += Math.pow(2, depSplit - 1);
            node = node.right;
        } else {
            node = node.left;
        }
        
        curDep++;
    }
    
    return Math.pow(2, totalDep - 1) + nodeNumsInLastLevel;
};

// find the depth of left most node in right subtree of current node
// binary search in last level
function findSplit(root) {
    if (!root || !root.right) {
        return 0;
    }
    
    var dep = 0,
        tmp = root;
    
    tmp = tmp.right;
    while(tmp) {
        dep++;
        tmp = tmp.left;
    }
    
    return dep;
}
