/**
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Write a function to determine if a number is strobogrammatic. The number is represented as a string.

For example, the numbers "69", "88", and "818" are all strobogrammatic.
*/
/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    let map = new Map();
    
    map.set('1', '1');
    map.set('6', '9');
    map.set('9', '6');
    map.set('8', '8');
    map.set('0', '0');
    
    let start = 0;
    let end = num.length - 1;
    
    while (start <= end) {
        if (!map.has(num.charAt(start)) || map.get(num.charAt(start)) !== num.charAt(end)) {
            return false;
        }
        
        start++;
        end--;
    }
    
    return true;
};
