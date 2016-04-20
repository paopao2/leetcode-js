/**
Sort a linked list using insertion sort.
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
var insertionSortList = function(head) {
    var dummy = new ListNode(0),
        pre = dummy,
        cur = head,
        next;
        
    while(cur !== null) {
        next = cur.next;
        pre = dummy;
        
        while (pre.next && pre.next.val <= cur.val) {
            pre = pre.next;
        }
        
        cur.next = pre.next;
        pre.next = cur;
        cur = next;
    }
    
    return dummy.next;
};
