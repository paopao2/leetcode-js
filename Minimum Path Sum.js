/**
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var result = [],
        rowL = grid.length,
        columnL,
        i,
        j;
    
    if (rowL === 0) {
        return result;
    }
    
    columnL = grid[0].length;
    
    for (i = 0; i < rowL; i++) {
        result.push(new Array(columnL));
    }
    
    result[0][0] = grid[0][0];
    
    for (i = 1; i < columnL; i++) {
        result[0][i] = grid[0][i] + result[0][i - 1];
    }
    
    for (i = 1; i < rowL; i++) {
        result[i][0] = grid[i][0] + result[i - 1][0];
    }
    
    for (i = 1; i < rowL; i++) {
        for (j = 1; j < columnL; j++) {
            result[i][j] = Math.min(result[i - 1][j], result[i][j - 1]) + grid[i][j];
        }
    }
    
    return result[rowL - 1][columnL - 1];
};
