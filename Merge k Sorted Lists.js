/**
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var len = lists.length;
    
    if (len === 0) {
        return null;
    }
    
    if (len === 1) {
        return lists[0];
    }
        
    return mergeHelper(lists, 0, len - 1);
};

function mergeHelper(lists, start, end) {
    if (start === end) {
        return lists[start];
    }
    
    if (start > end) {
        return null;
    }
    
    var mid = parseInt((start + end) / 2),
        left,
        right;
    
    left = mergeHelper(lists, start, mid);
    right = mergeHelper(lists, mid + 1, end);
    
    return mergeTwoLists(left, right);
}

function mergeTwoLists(left, right) {
    if (!left) {
        return right;
    }
    
    if (!right) {
        return left;
    }
    
    var dummy = new ListNode(0),
        prev = dummy,
        node1 = left,
        node2 = right;
    
    while (node1 && node2) {
        if (node1.val < node2.val) {
            prev.next = node1;
            node1 = node1.next;
        } else {
            prev.next = node2;
            node2 = node2.next;
        }
        
        prev = prev.next;
    }
    
    if (node1) {
        prev.next = node1;
    }
    
    if (node2) {
        prev.next = node2;
    }
    
    return dummy.next;
}
