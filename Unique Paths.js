/**
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 3 x 7 grid. How many possible unique paths are there?

Note: m and n will be at most 100.
*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var map = [],
        temp,
        i,
        j;
        
    for (i = 0; i < m; i++) {
        temp = [];
        map.push(temp);
    }
    
    for (i = 0; i < n; i++) {
        map[0][i] = 1;
    }
    
    for (i = 0; i < m; i++) {
        map[i][0] = 1;
    }
    
    for (i = 1; i < m; i++) {
        for (j = 1; j < n; j++) {
            map[i][j] = map[i - 1][j] + map[i][j - 1];
        }
    }
    
    return map[m - 1][n - 1];
};
