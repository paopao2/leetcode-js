/**
Sort a linked list in O(n log n) time using constant space complexity.
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
var sortList = function(head) {
    var slow = head,
        fast = head,
        head1 = head,
        head2 = head;
    
    if (head === null || head.next === null) {
        return head;
    }
    
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    head1 = slow.next;
    slow.next = null;
    
    head1 = sortList(head1);
    head2 = sortList(head);
    
    return merge(head2, head1);
};

function merge(a, b) {
    var dummy = new ListNode(0),
        node = dummy;
        
    while (a && b) {
        if (a.val < b.val) {
            node.next = a;
            a = a.next;
        } else {
            node.next = b;
            b = b.next;
        }
        node = node.next;
    }
    
    if (a) {
        node.next = a;
    } else {
        node.next = b;
    }
    
    return dummy.next;
}
