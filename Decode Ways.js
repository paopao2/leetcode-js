/**
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given an encoded message containing digits, determine the total number of ways to decode it.

For example,
Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

The number of ways decoding "12" is 2.
*/

// http://bangbingsyb.blogspot.com/2014/11/leetcode-decode-ways.html
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    var len = s.length,
        dp = [],
        x,
        y,
        cur,
        i;
        
    dp[0] = 1;
    dp[1] = 1;
    
    if (len === 0 || s.charAt(0) < '1' || s.charAt(0) > '9') {
        return 0;    
    }
    
    for (i = 1; i < len; i++) {
        x = s.charAt(i - 1) - '0';
        y = s.charAt(i) - '0';
        cur = x * 10 + y;
        dp[i + 1] = 0;
        
        if (cur > 9 && cur <= 26) {
            dp[i + 1] += dp[i - 1];
        } 
        
        if (y !== 0) {
            dp[i + 1] += dp[i];
        }
        
        if (dp[i + 1] === 0) {
            return 0;
        }
    }
    
    return dp[len];
};
