/**
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Follow up:
Can you solve it without using extra space?

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
var detectCycle = function(head) {
    if (head === null) {
        return null;
    }
    var slow = head,
        fast = head,
        met = false;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            met = true;
            break;
        }
    }
    
    if (met) {
        fast = head;
        while (fast !== slow) {
            fast = fast.next;
            slow = slow.next;
        }
        return fast;
    } else {
        return null;
    }
};
