/**
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

Hint:

Try to utilize the property of a BST.
What if you could modify the BST node's structure?
The optimal runtime complexity is O(height of BST).
*/

// SOLUTION 1
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var node = root,
        stack = [],
        count = 0,
        right;
    
    while (node) {
        stack.push(node);
        node = node.left;
    }
    
    while (stack.length > 0) {
        node = stack.pop();
        count++;
        
        if (k === count) {
            return node.val;
        }
        
        right = node.right;
        
        while (right) {
            stack.push(right);
            right = right.left;
        }
    }
    
    return null;
};


// SOLUTION 2

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var leftSums = findNodesSum(root.left);
    
    if (leftSums + 1 === k) {
        return root.val;
    }
    
    if (leftSums + 1 < k) {
        return kthSmallest(root.right, k - leftSums - 1);
    }
    
    return kthSmallest(root.left, k);
};

function findNodesSum(root) {
    if (!root) {
        return 0;
    }
    
    return findNodesSum(root.left) + findNodesSum(root.right) + 1;
}

// SOLUTION 3: with modifying property
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    addCountToNode(root);
    
    return findKth(root, k);
};

function addCountToNode(root) {
    if (!root) {
        return null;
    }
    
    root.count = 1;
    let left = addCountToNode(root.left);
    let right = addCountToNode(root.right);
    
    if (left) {
        root.count += left.count;
    }
    
    if (right) {
        root.count += right.count;
    }
    
    return root;
}

function findKth(root, k) {
    if (!root) {
        return;
    } 
    
    let leftCount;
    
    if (!root.left) {
        leftCount = 0;    
    } else {
        leftCount = root.left.count;
    }
    
    if (leftCount === k - 1) {
        return root.val;
    }
    
    if (leftCount > k - 1) {
        return findKth(root.left, k);
    }
    
    let newCount = k - 1 - leftCount;
    
    return findKth(root.right, newCount);
}
