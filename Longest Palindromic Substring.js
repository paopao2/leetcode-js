/**
Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.

*/
// MEMORY LIMIT EXCEEDED....
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var len = s.length,
        isPal = [],
        max = 1,
        start = 0,
        end = 0,
        i,
        j;
    
    for (i = 0; i < len; i++) {
        isPal.push(new Array(len));
        isPal[i][i] = true;
    }
    
    for (i = len - 1; i >= 0; i--) {
        for (j = i + 1; j < len; j++) {
            if (s.charAt(i) === s.charAt(j) && (j === i + 1 || isPal[i + 1][j - 1])) {
                isPal[i][j] = true;
                
                if (j - i + 1 > max) {
                    start = i;
                    end = j;
                    max = j - i + 1;
                }
            }
        }
    }
    
    return s.substring(start, end + 1);
};
