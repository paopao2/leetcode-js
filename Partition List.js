/**
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

For example,
Given 1->4->3->2->5->2 and x = 3,
return 1->2->2->4->3->5.

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var cur = head,
        next,
        preHead,
        preTail,
        afterHead,
        afterTail;
    
    if (head === null) {
        return null;
    }
    
    while(cur) {
        next = cur.next;
        cur.next = null;
        if (cur.val < x) {
            if (!preHead) {
                preHead = cur;
                preTail = cur;
            } else {
                preTail.next = cur;
                preTail = cur;
            }
        } else {
            if (!afterHead) {
                afterHead = cur;
                afterTail = cur;
            } else {
                afterTail.next = cur;
                afterTail = cur;
            }
        }
        cur = next;
    }
    
    if (preTail) {
        preTail.next = afterHead;
        return preHead;
    } else {
        return afterHead;
    }
};
