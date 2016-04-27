/**
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

You may assume that the given expression is always valid.

Some examples:
"3+2*2" = 7
" 3/2 " = 1
" 3+5 / 2 " = 5
Note: Do not use the eval built-in library function.
*/
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var signs = [],
        nums = [],
        len = s.length,
        num = 0,
        ch,
        i,
        j;
        
    for (i = 0; i < len; i++) {
        ch = s.charAt(i);
        
        if (!isNaN(parseInt(ch))) {
            num = 0;
            for (j = i; j < len && !isNaN(parseInt(s.charAt(j))); j++) {
                num = num * 10 + parseInt(s.charAt(j));
            }
            
            i = j - 1;
            nums.push(num);
        } else if (ch === '-' || ch === '+' || ch === '*' || ch === '/') {
            signs.push(ch);
        }
    }
    
    for (i = 0; i < signs.length;) {
        if (signs[i] === '*') {
            num = nums[i] * nums[i + 1];
            nums.splice(i, 2, num);
            signs.splice(i, 1);
        } else if (signs[i] === '/') {
            num = Math.floor(nums[i] / nums[i + 1]);
            nums.splice(i, 2, num);
            signs.splice(i, 1);
        } else {
            i++;
        }
    }
    
    num = nums.shift();
    for (i = 0; i < signs.length; i++) {
        if (signs[i] === '+') {
            num += nums.shift();
        } else if (signs[i] === '-') {
            num -= nums.shift();
        }
    }
    
    return num;
};

