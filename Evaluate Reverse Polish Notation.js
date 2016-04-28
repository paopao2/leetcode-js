/**
Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Some examples:
  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
Subscribe to see which companies asked this question
*/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var stack = [],
        len = tokens.length,
        ch,
        num,
        i;
        
    for (i = 0; i < len; i++) {
        ch = tokens[i];
        
        if (isNaN(parseInt(ch))) {
            if (ch === '+') {
                num = stack.pop() + stack.pop();
                stack.push(num);
            } else if (ch === '-') {
                num = stack.pop();
                num = stack.pop() - num;
                stack.push(num);
            } else if (ch === '*') {
                num = stack.pop() * stack.pop();
                stack.push(num);
            } else if (ch === '/') {
                num = stack.pop();
                num = parseInt(stack.pop() / num);
                stack.push(num);
            }
        } else {
            stack.push(parseInt(ch));
        }
    }
    
    return stack.pop();
};
