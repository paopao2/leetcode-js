/**
Write a program to find the node at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3
begin to intersect at node c1.


Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var nodeA = headA,
        nodeB = headB,
        isALonger,
        i = 0;
    
    if (headA === headB) {
        return headA;
    }
    
    if (headA === null || headB === null) {
        return null;
    }
    
    while (nodeA.next && nodeB.next) {
        nodeA = nodeA.next;
        nodeB = nodeB.next;
    }
    
    while (nodeA.next) {
        nodeA = nodeA.next;
        isALonger = true;
        i++;
    }
    
    while (nodeB.next) {
        nodeB = nodeB.next;
        isALonger = false;
        i++;
    }
    
    if (nodeA !== nodeB) {
        return null;
    }
    
    nodeA = headA;
    nodeB = headB;
    
    while (i > 0) {
        if (isALonger) {
            nodeA = nodeA.next;
        } else {
            nodeB = nodeB.next;
        }
        
        i--;
    }
    
    while (nodeA !== nodeB) {
        nodeA = nodeA.next;
        nodeB = nodeB.next;
    }
    
    return nodeA;
};
