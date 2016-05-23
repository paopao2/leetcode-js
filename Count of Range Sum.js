/**
Given an integer array nums, return the number of range sums that lie in [lower, upper] inclusive.
Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j (i ≤ j), inclusive.

Note:
A naive algorithm of O(n2) is trivial. You MUST do better than that.

Example:
Given nums = [-2, 5, -1], lower = -2, upper = 2,
Return 3.
The three ranges are : [0, 0], [2, 2], [0, 2] and their respective sums are: -2, -1, 2.
*/
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
    function SegmentTreeNode(min, max) {
        this.min = min;
        this.max = max;
        this.count = 0;
    }
    
    function buildSegmentTree(valArr, low, high) {
        if (low > high) {
            return null;
        }
        
        var mid = parseInt((low + high) / 2),
            node = new SegmentTreeNode(valArr[low], valArr[high]);
        
        if (low === high) {
            return node;
        }
        
        node.left = buildSegmentTree(valArr, low, mid);
        node.right = buildSegmentTree(valArr, mid + 1, high);
        
        return node;
    }
    
    function updateSegmentTree(node, val) {
        if (!node) {
            return;
        }
        
        if (val >= node.min && val <= node.max) {
            node.count++;
            updateSegmentTree(node.left, val);
            updateSegmentTree(node.right, val);
        }
    }
    
    function rangeCount(node, min, max) {
        if (!node) {
            return 0;
        }
        
        if (min > node.max || max < node.min) {
            return 0;
        }
        
        if (min <= node.min && max >= node.max) {
            return node.count;
        }
        
        return rangeCount(node.left, min, max) + rangeCount(node.right, min, max);
    }
    
    var len = nums.length,
        sumSet = new Set(),
        sum = 0,
        result = 0,
        arr,
        root,
        i;
        
    if (len === 0) {
        return 0;
    }
    
    for (i = 0; i < len; i++) {
        sum += nums[i];
        sumSet.add(sum);
    }
    
    arr = Array.from(sumSet);
    arr.sort(function(a, b) {
        return a - b;
    });
    
    root = buildSegmentTree(arr, 0, arr.length - 1);
    
    for (i = len - 1; i >= 0; i--) {
        updateSegmentTree(root, sum);
        sum -= nums[i];
        result += rangeCount(root, lower + sum, upper + sum);
    }
    
    return result;
};
