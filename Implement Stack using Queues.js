/**
Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Notes:
You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).
Update (2015-06-11):
The class name of the Java function had been updated to MyStack instead of Stack.


*/

/**
 * @constructor
 */
var Stack = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    var temp;
    
    this.stack2.push(x);
    
    while(this.stack1.length > 0) {
        this.stack2.push(this.stack1.shift());
    }
    
    temp = this.stack2;
    this.stack2 = this.stack1;
    this.stack1 = temp;
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    return this.stack1.shift();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.stack1[0];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.stack1.length === 0;
};
