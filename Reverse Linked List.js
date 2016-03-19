/**
Reverse a singly linked list.

click to show more hints.

Hint:
A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var cur = head,
        next;
    
    head = null;
    
    while(cur) {
        next = cur.next;
        cur.next = head;
        
        if (next) {
            head = cur;
            cur = next;
        } else {
            return cur;   
        }
    }
    
    return null;
};

// recursive

var reverseList = function(head) {
    if (!head) {
        return null;
    }
    
    if (!head.next) {
        return head;
    }
    
    var newHead = reverseList(head.next);
    
    head.next.next = head;
    head.next = null;
    
    return newHead;
};
