/**
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var cur = n,
        num,
        i,
        len,
        result = [],
        sum = 0,
        sums = [];
    while (true) {
        while (cur !== 0) {
            num = cur%10;
            result.push(num);
            cur = (cur - num)/10;
        }
        len = result.length;
        for(i = 0; i < len; i++) {
            sum += Math.pow(result[i], 2);
        }
        if (sum === 1) {
            return true;
        } else {
            if (sums.indexOf(sum) !== -1) {
                return false;
            } else {
                sums.push(sum);
                result = [];
                cur = sum;
                sum = 0;
            }
        }
    }
};
