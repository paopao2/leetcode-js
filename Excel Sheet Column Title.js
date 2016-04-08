/**
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
*/
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var result = '',
        cur;
    
    //97 is the ASCII code for lower case 'a'. If you want uppercase letters, replace 97 with 65 (uppercase 'A'). 
    
    while (n > 0) {
        cur = (n - 1) % 26;
        result = String.fromCharCode(65 + cur) + result;
        n = Math.floor((n - 1) / 26);
    }
    
    return result;
};
