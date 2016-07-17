/**
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Find all strobogrammatic numbers that are of length = n.

For example,
Given n = 2, return ["11","69","88","96"].

Hint:
Try to use recursion and notice that it should recurse with n - 2 instead of n - 1.
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
    return helper(n, n);
};

function helper(cur, n) {
    if (cur === 0) {
        return [''];
    }
    
    if (cur === 1) {
        return ['1', '8', '0'];
    }
    
    const list = helper(cur - 2, n);
    let result = [];
    
    for (let i = 0; i < list.length; i++) {
        if (cur !== n) {
            result.push('0' + list[i] + '0');
        }
        
        result.push('1' + list[i] + '1');
        result.push('8' + list[i] + '8');
        result.push('6' + list[i] + '9');
        result.push('9' + list[i] + '6');
    }
    
    return result;
}
