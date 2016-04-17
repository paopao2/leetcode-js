/**
One way to serialize a binary tree is to use pre-order traversal. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as #.

     _9_
    /   \
   3     2
  / \   / \
 4   1  #  6
/ \ / \   / \
# # # #   # #
For example, the above binary tree can be serialized to the string "9,3,4,#,#,1,#,#,2,#,6,#,#", where # represents a null node.

Given a string of comma separated values, verify whether it is a correct preorder traversal serialization of a binary tree. Find an algorithm without reconstructing the tree.

Each comma separated value in the string must be either an integer or a character '#' representing null pointer.

You may assume that the input format is always valid, for example it could never contain two consecutive commas such as "1,,3".

Example 1:
"9,3,4,#,#,1,#,#,2,#,6,#,#"
Return true

Example 2:
"1,#"
Return false

Example 3:
"9,#,#,1"
Return false
*/
/**
 * @param {string} preorder
 * @return {boolean}
 * 这个方法简单的说就是不断的砍掉叶子节点。最后看看能不能全部砍掉。

已例子一为例，：”9,3,4,#,#,1,#,#,2,#,6,#,#” 遇到x # #的时候，就把它变为 #

我模拟一遍过程：

9,3,4,#,# => 9,3,# 继续读
9,3,#,1,#,# => 9,3,#,# => 9,# 继续读
9,#2,#,6,#,# => 9,#,2,#,# => 9,#,# => #
 */
var isValidSerialization = function(preorder) {
    var arr = preorder.split(','),
        stack = [],
        len = arr.length,
        i;
    
    for (i = 0; i < len; i++) {
        stack.unshift(arr[i]);
        
        while (stack.length > 2 && stack[0] === '#' && stack[1] === '#') {
            if (stack[2] === '#') {
                return false;
            }
            
            stack.shift();
            stack.shift();
            stack[0] = '#';
        }
    }
    
    return stack.length === 1 && stack[0] === '#';
};

// solution 2

/**
 * @param {string} preorder
 * @return {boolean}
 * 对于二叉树，我们把空的地方也作为叶子节点（如题目中的#），那么有

所有的非空节点提供2个出度和1个入度（根除外）
所有的空节点但提供0个出度和1个入度
我们在遍历的时候，计算diff = outdegree – indegree. 当一个节点出现的时候，diff – 1，因为它提供一个入度；当节点不是#的时候，diff+2(提供两个出度) 如果序列式合法的，那么遍历过程中diff >=0 且最后结果为0.
 */
var isValidSerialization = function(preorder) {
    var arr = preorder.split(','),
        len = arr.length,
        diff; // outdegree - indegree
    
    if (arr[0] === '#') {
        if (len > 1) {
            return false;
        }
        return true;
    }
    
    diff = 2;

    for (i = 1; i < len; i++) {
        diff--; // from parent
        if (diff < 0) {
            return false;
        }
        
        if (arr[i] !== '#') {
            diff += 2; // have two outdegree
        }
    }
    
    return diff === 0;
};
