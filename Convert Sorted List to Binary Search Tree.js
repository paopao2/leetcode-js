/**
Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    var len = 0,
        node = head;
    
    if (!node) {
        return null;
    }
    
    while (node) {
        len++;
        node = node.next;
    }
    curNode = head;
    return helper(0, len - 1);
},
curNode;

// build tree bottom up
function helper(start, end) {
    if (start > end) {
        return null;
    }
    
    var mid = parseInt((start + end) / 2),
        left,
        right,
        node;
        
    left = helper(start, mid - 1),
    node = new TreeNode(curNode.val);
    curNode = curNode.next;
    right = helper(mid + 1, end);
    
    node.left = left;
    node.right = right;
    
    return node;
}


// solution 2
var sortedListToBST = function(head) {
    var arr = [],
        node = head,
        len;
    
    if (!node) {
        return null;
    }
    
    while (node) {
        arr.push(node);
        node = node.next;
    }
    
    len = arr.length;
    
    if (len === 1) {
        return head;
    }
    
    return getMidNode(0, len - 1, arr);
};

function getMidNode(start, end, arr) {
    if (start > end) {
        return null;
    }
    
    var mid = parseInt((start + end) / 2),
        node = new TreeNode(arr[mid].val);
        
    node.left = getMidNode(start, mid - 1, arr);
    node.right = getMidNode(mid + 1, end, arr);
    
    return node;
}
