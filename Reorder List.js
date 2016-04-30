/**
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You must do this in-place without altering the nodes' values.

For example,
Given {1,2,3,4}, reorder it to {1,4,2,3}.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var fast = head,
        slow = head,
        next1,
        next2,
        midHead;
    
    if (!head || !head.next) {
        return;
    }  
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    if (fast) {
        midHead = reverse(slow.next);
    } else {
        midHead = reverse(slow);
    }
    
    fast = head;
    slow = midHead;
    
    while(fast && slow) {
        next1 = fast.next;
        next2 = slow.next;
        
        slow.next = fast.next;
        fast.next = slow;
        
        fast = next1;
        slow = next2;
    }
    
    if (fast) {
        fast.next = null;
    }
};

function reverse(head) {
    var dummyNode = new ListNode(0),
        prev = dummyNode,
        node,
        next;
        
    dummyNode.next = head;
    
    node = head.next;
    head.next = null;
    
    while (node) {
        next = node.next;
        node.next = prev.next;
        prev.next = node;

        node = next;
    }
    
    return dummyNode.next;
}
