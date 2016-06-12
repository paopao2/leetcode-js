/**
Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

Examples: 
[2,3,4] , the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Design a data structure that supports the following two operations:

void addNum(int num) - Add a integer number from the data stream to the data structure.
double findMedian() - Return the median of all elements so far.
For example:

add(1)
add(2)
findMedian() -> 1.5
add(3) 
findMedian() -> 2
*/

// SOLUTION 1: use a max heap and min heap
// java solution
/**
class MedianFinder {

    private Queue<Long> small = new PriorityQueue(),
                        large = new PriorityQueue();

    public void addNum(int num) {
        large.add((long) num);
        small.add(-large.poll());
        if (large.size() < small.size())
            large.add(-small.poll());
    }

    public double findMedian() {
        return large.size() > small.size()
               ? large.peek()
               : (large.peek() - small.peek()) / 2.0;
    }
};
*/

// SOLUTION 2: BST
/**
 * My BST node, has extra attribute initialized as 0
 */
class BSTNode {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.size = 1;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    
    add(val, node) {
        if (!node) {
            this.root = new BSTNode(val);
            return;
        }
        
        if (val > node.val) {
            if (node.right) {
                this.add(val, node.right);
            } else {
                node.right = new BSTNode(val);
            }
        } else {
            if (node.left) {
                this.add(val, node.left);
            } else {
                node.left = new BSTNode(val);
            }
        }
        
        node.size++;
    }
    
    rank(k) {
        let node = this.root;
        
        while(true) {
            const leftSize = node.left ? node.left.size : 0;
            
            if (leftSize === k) {
                return node.val;
            }
            
            if (leftSize > k) {
                node = node.left;
            } else {
                node = node.right;
                k = k - leftSize - 1;
            }
        }
    }
}

/**
 * @constructor
 */
var MedianFinder = function() {
    this.BST = new BST();
};

/**
 * @param {integer} word
 * @return {void}
 * Adds a num into the data structure.
 */
MedianFinder.prototype.addNum = function(num) {
    this.BST.add(num, this.BST.root);
};

/**
 * @return {double}
 * Return median of current data stream
 */
MedianFinder.prototype.findMedian = function() {
    const size = this.BST.root.size;
    
    if (size % 2 === 0) {
        return (this.BST.rank(size / 2) + this.BST.rank(size / 2 - 1)) / 2;
    }
    
    return this.BST.rank(parseInt(size / 2));
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var mf = new MedianFinder();
 * mf.addNum(1);
 * mf.findMedian();
 */
