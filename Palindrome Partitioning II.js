
/**
Given a string s, partition s such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.

For example, given s = "aab",
Return 1 since the palindrome partitioning ["aa","b"] could be produced using 1 cut.
*/
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const len = s.length;
    let dp = [];
    let cut = [];
    let i, j; 
    
    for (i = 0; i < len; i++) {
        dp.push(new Array(len).fill(false));
    }
    
    for (i = 0; i < len; i++) {
        for (j = i; j >= 0; j--) {
            if (s.charAt(j) === s.charAt(i) && (i - j < 2 || dp[j + 1][i - 1])) {
                dp[j][i] = true;
            }
        }
    }
    
    // cur[i] how many cuts from 0 to i
    cut[0] = 0;
    
    for (i = 1; i <= len; i++) {
        for (j = i; j > 0; j--) {
            if (dp[j - 1][i - 1]) {
                cut[i] = Math.min(cut[i] ? cut[i] : Number.MAX_VALUE, cut[j - 1] + 1);
            }
        }
    }
    
    return cut[len] - 1;
};
