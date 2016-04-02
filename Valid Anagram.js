/**
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var len = s.length,
        arr = {},
        i;
    
    if (t.length !== len) {
        return false;
    }
    
    if (len === 0) {
        return true;
    }
    
    for (i = 0; i < len; i++) {
        if (!arr[s.charAt(i)]) {
            arr[s.charAt(i)] = 1;
        } else {
            arr[s.charAt(i)]++;
        }
    }
    
    for (i = 0; i < len; i++) {
        if (typeof arr[t.charAt(i)] === 'undefined' || --arr[t.charAt(i)] < 0) {
            return false;
        }
    }
    
    return true;
};
