/**
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var arr = str.split(' '),
        len = arr.length,
        map1 = {},
        map2 = {},
        curChar,
        curString,
        i;
    
    if (pattern.length !== len) {
        return false;
    }
    
    for (i = 0; i < len; i++) {
        curChar = pattern.charAt(i);
        curString = arr[i];
        
        if (!map1.hasOwnProperty(curChar) && !map2.hasOwnProperty(curString)) {
            map1[curChar] = curString;
            map2[curString] = curChar;
        } else if (map1[curChar] !== curString || map2[curString] !== curChar) {
            return false;
        }
    }
    
    return true;
};
