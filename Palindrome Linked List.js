/**
Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var fast = head,
        slow = head,
        midPoint;
    
    if (head === null || head.next === null) {
        return true;
    }
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    midPoint = reverse(slow);
    fast = head;
    
    while (midPoint && fast && (fast.val === midPoint.val)) {
        midPoint = midPoint.next;
        fast = fast.next;
    }

    return midPoint === null;
};

function reverse(head) {
    if (!head) {
        return null;
    }

    if (!head.next) {
        return head;
    }

    var newHead = reverse(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
}
