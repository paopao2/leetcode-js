/**
Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 

 * @param {string} s
 * @return {number} Return column number
 */
var titleToNumber = function(s) {
    var len = s.length,
        i,
        result = 0;
    for (i = 0; i < len; i++) {
        result += Math.pow(26, len - i - 1) * (s.charAt(i).charCodeAt() - 'A'.charCodeAt() + 1);
    }
    return result;
};
