/**
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.


 * @constructor
 */
var MinStack = function() {
    this.min = [];
    this.arr = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    var len = this.min.length;
    if (this.arr.length === 0) {
        this.min.push(x);
    } else if (this.min[len - 1] >= x) {
        this.min.push(x);
    }
    this.arr.push(x);
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    var elem,
        len = this.min.length;
    if (this.arr.length > 0) {
        elem = this.arr.pop();
    }
    if (elem === this.min[len - 1]) {
        this.min.pop();   
    }
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    var len = this.arr.length;
    if (len > 0) {
        return this.arr[len - 1];
    }
    
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    var len = this.min.length;
    return this.min[len - 1];
};
