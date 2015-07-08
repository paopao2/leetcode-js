/**
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

For "(()", the longest valid parentheses substring is "()", which has length = 2.

Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var len = s.length,
        last = -1,
        left = [],
        max = 0,
        i;
    
    // the important thing here is track the last ')'
    for (i = 0; i < len; i++) {
        if (s.charAt(i) === '(') {
            left.push(i);
        } else {
            if (left.length === 0) {
                last = i;
            } else {
                left.pop();
                if (left.length === 0) {
                    max = Math.max(max, i - last);
                } else {
                    max = Math.max(max, i - left[left.length - 1]);
                }
            }
        }
    }
    
    return max;
};
