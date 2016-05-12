/**
Given an integer matrix, find the length of the longest increasing path.

From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

Example 1:

nums = [
  [9,9,4],
  [6,6,8],
  [2,1,1]
]
Return 4
The longest increasing path is [1, 2, 6, 9].

Example 2:

nums = [
  [3,4,5],
  [3,2,6],
  [2,2,1]
]
Return 4
The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
*/
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    var dp = [], // dp[i][j] the longest increasing path starting from matrix[i][j]
        rLen = matrix.length,
        cLen,
        i,
        j,
        max = 0;
    
    if (rLen === 0) {
        return 0;
    }
    
    cLen = matrix[0].length;
    
    for (i = 0; i < rLen; i++) {
        dp.push(new Array(cLen));
    }
    
    for (i = 0; i < rLen; i++) {
        for (j = 0; j < cLen; j++) {
            dp[i][j] = 0;
        }
    }
    
    for (i = 0; i < rLen; i++) {
        for (j = 0; j < cLen; j++) {
            max = Math.max(max, dfs(i, j, rLen, cLen, matrix, dp));
        }
    }
    
    return max;
};

function dfs(i, j, rLen, cLen, matrix, dp) {
    if (dp[i][j] !== 0) {
        return dp[i][j];
    }
    
    var dx = [1, 0, 0, -1],
        dy = [0, 1, -1, 0],
        max = 1,
        m,
        len,
        x,
        y;
        
    for (m = 0; m < 4; m++) {
        x = dx[m] + i;
        y = dy[m] + j;
        
        if (x >= 0 && y >= 0 && x < rLen && y < cLen && matrix[x][y] > matrix[i][j]) {
            max = Math.max(max, 1 + dfs(x, y, rLen, cLen, matrix, dp));
        }
    }
    
    dp[i][j] = max;
    
    return max;
}
