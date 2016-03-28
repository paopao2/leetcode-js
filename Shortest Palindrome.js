/**
Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

For example:

Given "aacecaaa", return "aaacecaaa".

Given "abcd", return "dcbabcd".
*/

// https://segmentfault.com/a/1190000003059361

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    var reverse = s.split('').reverse().join('');
    
    return reverse.substring(0, s.length - getCommonLength(s + '#' + reverse)) + s;
};

function getCommonLength(s) {
    var p = [], // max len of common prefix and suffix from index 0 to i 
        len = s.length,
        i = 0,
        j;
    
    while(i < len) {
        p.push(0);
        i++;
    }
    
    for (i = 1; i < len; i++) {
        j = p[i - 1];
        
        while(j > 0 && (s.charAt(i) !== s.charAt(j))) {
            j = p[j - 1];
        }
        
        if (s.charAt(i) === s.charAt(j)) {
            j++;
        }
        
        p[i] = j; 
    }
    
    return p[len - 1];
}   
