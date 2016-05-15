/**
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

For example, you may serialize the following tree

    1
   / \
  2   3
     / \
    4   5
as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    var result = [];
    
    sHelper(root, result);
    return result.toString();
};

function sHelper(root, result) {
    if (root === null) {
        result.push('#');
        return;
    }
    
    result.push(root.val);
    sHelper(root.left, result);
    sHelper(root.right, result);
}
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    var arr = data.split(','),
        len = arr.length;
        
    if (len === 0) {
        return null;
    }
    
    return buildTree(arr);
};

function buildTree(arr) {
    var curNode,
        val;
    
    if (arr.length === 0) {
        return null;
    }
    
    val = arr.shift();
    
    if (val === '#') {
        return null;
    }
    
    curNode = new TreeNode(parseInt(val));
    curNode.left = buildTree(arr);
    curNode.right = buildTree(arr);
    
    return curNode;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
