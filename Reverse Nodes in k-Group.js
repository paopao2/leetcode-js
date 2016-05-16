/**
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

You may not alter the values in the nodes, only nodes itself may be changed.

Only constant memory is allowed.

For example,
Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 
// iterative solution, not recommended, very easy to make mistakes
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var dummy = new ListNode(0),
        i = 0,
        node = head,
        next,
        prevTail,
        curHead,
        curTail,
        nextHead,
        nextTail;
    
    while (node) {
        node = node.next;
        i++;
        
        if (i >= k) {
            break;
        }
    }
    
    if (k === 1 || i < k ) {
        return head;
    }
    
    i = 0;
    
    dummy.next = head;
    prevTail = dummy;
    node = head;
    
    while (node) {
        if (i === 0) {
            curTail = node;
            next = node.next;
            node.next = null;
            prevTail.next = node;
        } else {
            next = node.next;
            node.next = prevTail.next;
            prevTail.next = node;
        }
        
        i++;
        
        if (i === k) {
            prevTail = curTail;
            i = 0;
        }
        
        node = next;
    }
    
    if (i < k) {
        node = prevTail.next;
        prevTail.next = null;
        
        while (node) {
            next = node.next;
            node.next = prevTail.next;
            prevTail.next = node;
            node = next;
        }
    }
    
    return dummy.next;
};

// recursive
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var i = 0,
        newHead = head,
        dummy = new ListNode(0),
        prev,
        cur,
        next;
    
    for (i = 0; i < k; i++) {
        if (newHead === null) {
            return head;
        }
        
        newHead = newHead.next;
    }
    
    newHead = reverseKGroup(newHead, k);
    cur = head;
    dummy.next = newHead;
    
    for (i = 0; i < k; i++) {
        next = cur.next;
        cur.next = dummy.next;
        dummy.next = cur;
        cur = next;
    }
    
    return dummy.next;
};
