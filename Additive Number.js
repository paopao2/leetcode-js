/**
Additive number is a string whose digits can form additive sequence.

A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

For example:
"112358" is an additive number because the digits can form an additive sequence: 1, 1, 2, 3, 5, 8.

1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
"199100199" is also an additive number, the additive sequence is: 1, 99, 100, 199.
1 + 99 = 100, 99 + 100 = 199
Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.

Follow up:
How would you handle overflow for very large input integers?
*/
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    var len = num.length,
        i,
        j;
        
    for (i = 1; i <= len / 2; i++) {
        for (j = 1; j <= len / 2; j++) {
            if (canBeAdded(num.substr(0, i), num.substr(i, j), num.substr(i + j))) {
                return true;
            }
        }
    }
    
    return false;
};

function canBeAdded(a, b, c) {
    if ((a.length > 1 && a.charAt(0) === '0') || (b.length > 1 && b.charAt(0) === '0') || (c.length >= 1 && c.charAt(0) === '0')) {
        return false;
    }
    
    var aNum = parseInt(a),
        bNum = parseInt(b),
        sum = aNum + bNum + '';
        
    if (c === sum) {
        return true;
    }
    
    if (c.substr(0, sum.length) !== sum) {
        return false;
    }
    
    return canBeAdded(b, sum, c.substr(sum.length));
}
