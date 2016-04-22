/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    if (!s) {
        return s;
    }
    
    return s.split('').reverse().join('');
};
