/**
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree {3,9,20,#,#,15,7},
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    var result = [],
        cur = [],
        left = true,
        i,
        len,
        temp,
        next;
    
    if (!root) {
        return result;
    }
    
    cur.push(root);
    
    while(cur.length > 0) {
        len = cur.length;
        temp = [];
        next = [];
        
        for (i = 0; i < len; i++) {
            temp.push(cur[i].val);
            
            if (cur[i].left) {
                next.push(cur[i].left);
            }
            
            if (cur[i].right) {
                next.push(cur[i].right);
            }
        }
        
        if (!left) {
            temp.reverse();
        }
        
        left = !left;
        result.push(temp);
        cur = next;
    }

    return result;
};

// SOLUTION 2: USE STACK
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    var result = [],
        cur = [],
        left = true,
        i,
        len,
        temp,
        next,
        node;
    
    if (!root) {
        return result;
    }
    
    cur.push(root);
    
    while(cur.length > 0) {
        len = cur.length;
        temp = [];
        next = [];
        
        node = cur.pop();
        
        while (node) {
            temp.push(node.val);
            
            if (left) {
                if (node.left) {
                    next.push(node.left);
                }
                
                if (node.right) {
                    next.push(node.right);
                }
            } else {
                if (node.right) {
                    next.push(node.right);
                }
                
                if (node.left) {
                    next.push(node.left);
                }
            }
            
            node = cur.pop();
        }
        
        result.push(temp);
        cur = next;
        left = !left;
    }
    
    return result;
};