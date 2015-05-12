/**
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s === null) {
        return false;
    }
    var stack = [],
        sets = {'(':')', '{':'}', '[':']'},
        len = s.length,
        cur,
        stackTop,
        i;

    for (i = 0; i < len; i++) {
        cur = s.charAt(i);
        if (sets.hasOwnProperty(cur)) {
            stack.push(cur);
        } else {
            if (stack.length === 0) {
                return false;
            } else {
                stackTop = stack.pop();
                if (sets[stackTop] !== cur) {
                    return false;
                }
            }
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
    
};
