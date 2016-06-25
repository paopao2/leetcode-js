/**
Given two strings S and T, determine if they are both one edit distance apart
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    for (let i = 0; i < Math.min(s.length, t.length); i++) {
        if (s.charAt(i) !== t.charAt(i)) {
            if (s.length === t.length) {
                return s.substring(i + 1) === t.substring(i + 1);
            } else if (s.length < t.length) {
                return s.substring(i) === t.substring(i + 1);
            } else {
                return s.substring(i + 1) === t.substring(i);
            }
        }
    }
    
    return Math.abs(s.length - t.length) === 1;
};
