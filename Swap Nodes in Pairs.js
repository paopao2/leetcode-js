/**
Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
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
var swapPairs = function(head) {
    if (head === null) {
        return null;
    }
    
    var next = head.next,
        result = next? next : head,
        prevTail,
        curHead,
        nextHead;
    
    curHead = head;

    while(next) {
        nextHead = next.next;
        
        if (prevTail) {
            prevTail.next = next;
        }
        
        next.next = curHead;
        curHead.next = nextHead;
        prevTail = curHead;
        
        curHead = nextHead;
        next = curHead && curHead.next;
    }
    
    return result;
};
