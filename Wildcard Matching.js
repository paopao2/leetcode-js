/**
Implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "*") → true
isMatch("aa", "a*") → true
isMatch("ab", "?*") → true
isMatch("aab", "c*a*b") → false
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sIndex = 0;
    let pIndex = 0;
    let startIndex = -1; // startIndex of * in p
    let match = 0; // the position in s that matches with p 
    
    while (sIndex < s.length) {
        // matches, both advance
        if (pIndex < p.length && (s.charAt(sIndex) === p.charAt(pIndex) || p.charAt(pIndex) === '?')) {
            pIndex++;
            sIndex++;
        } else if (pIndex < p.length && p.charAt(pIndex) === '*') {
            startIndex = pIndex;
            match = sIndex;
            pIndex++;
        } else if (startIndex !== -1) {
            pIndex = startIndex + 1;
            match++;
            sIndex = match;
        } else {
            return false;
        }
    }
    
    while (pIndex < p.length && p.charAt(pIndex) === '*') {
        pIndex++;
    }
    
    return pIndex === p.length;
};
