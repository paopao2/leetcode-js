/**
Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var nodeA = head,
        nodeB = head,
        i = 0;
    
    if (!head) {
        return null;
    }
    
    while (nodeA.next) {
        nodeA = nodeA.next;
        if (i < n) {
            i++;
        } else {
            nodeB = nodeB.next;
        }
    }
    
    if (i < n) {
        head = head.next;
        return head;
    }
    
    if (nodeB.next) {
        nodeB.next = nodeB.next.next;
        return head;
    }
    
    return null;
      
};
