/**
The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.

 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    function interpret(s, accum, sum) {
        var times = 1,
            num,
            len = s.length,
            i,
            result = '';
        
        num = s.charAt(0);
        
        for (i = 1; i < len; i++) {
            if (s.charAt(i) !== num) {
                result += times + num;
                num = s.charAt(i);
                times = 1;
            } else {
                times++;
            }
        }
        if (accum === 1) {
            result = '1';
        } else {
            result += times + num;
        }
        if (accum === sum) {
            return result;
        } else {
            return interpret(result, accum + 1, sum);
        }
    }
    return interpret('1', 1, n);
};
