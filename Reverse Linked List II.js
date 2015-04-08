/**
 *Reverse a linked list from position m to n. Do it in-place and in one-pass.

For example:
Given 1->2->3->4->5->NULL, m = 2 and n = 4,

return 1->4->3->2->5->NULL.

Note:
Given m, n satisfy the following condition:
1 ≤ m ≤ n ≤ length of list.
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


//Memory Limit Exceeded

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var dummy = new ListNode(0),
        prev,
        cur = dummy,
        next,
        i;
        
    if (m === n || head === null || head.next === null) {
        return head;
    }
    dummy.next = head;
    i = m - 1;
    while (i > 0) {
        cur = cur.next;
        i--;
    }
    prev = cur;
    cur = cur.next;
    i = n - m;
    while (cur !== null && i > 0) {
        next = cur.next;
        if (next) {
            cur.next = next.next;
            next.next = prev.next;
            prev.next = next;
            cur = cur.next;
        } else {
            cur.next = prev.next;
            prev.next = cur;
        }
        i--;
    }
    return dummy.next;
    
};
