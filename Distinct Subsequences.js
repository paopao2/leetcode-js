/**
Given a string S and a string T, count the number of distinct subsequences of T in S.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

Here is an example:
S = "rabbbit", T = "rabbit"

Return 3.
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * 
 * S[j-1]!= T[i-1]：DP[i][j] = DP[i][j-1]
 * S[j-1]==T[i-1]：DP[i][j] = DP[i-1][j-1] + DP[i][j-1]
 */
var numDistinct = function(s, t) {
    var lenS = s.length,
        lenT = t.length,
        i,
        j,
        dp;
        
    if (lenS < lenT) {
        return 0;
    }
    
    if (lenS === lenT) {
        return s === t? 1 : 0;
    }
    
    dp = [];
    
    for (i = 0; i <= lenT; i++) {
        dp.push(new Array(lenS + 1));

        for (j = 0; j <= lenS; j++) {
            dp[i][j] = 0;
        }
    }
    
    for (j = 0; j <= lenS; j++) {
        dp[0][j] = 1;
    }
    
    
    for (i = 0; i < lenT; i++) {
        for (j = 0; j < lenS; j++) {
            dp[i + 1][j + 1] = dp[i + 1][j];
            
            if (s.charAt(j) === t.charAt(i)) {
                dp[i + 1][j + 1] += dp[i][j];
            }
        }
    }
    
    return dp[lenT][lenS];
};

// use 1D dp solution
// draw 2D dp realation and try to save space
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * 
 * S[j-1]!= T[i-1]：DP[i][j] = DP[i][j-1]
 * S[j-1]==T[i-1]：DP[i][j] = DP[i-1][j-1] + DP[i][j-1]
 */
var numDistinct = function(s, t) {
    var lenS = s.length,
        lenT = t.length,
        i,
        j,
        dp;
        
    if (lenS < lenT) {
        return 0;
    }
    
    if (lenS === lenT) {
        return s === t? 1 : 0;
    }
    
    dp = [];
    dp[0] = 1;    
    
    for (i = 1; i <= lenT; i++) {
        dp[i] = 0;
    }
    
    for (j = 0; j <= lenS; j++) {
        for (i = lenT - 1; i >= 0; i--) {
            if (s.charAt(j) === t.charAt(i)) {
                dp[i + 1] += dp[i];
            }
        }
    }
    
    return dp[lenT];
};
