/**
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

11110
11010
11000
00000
Answer: 1

Example 2:

11000
11000
00100
00011
Answer: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var len = grid.length,
        result = 0,
        len1,
        i,
        j;
        
    if (len === 0) {
        return 0;
    }
    
    len1 = grid[0].length;
    
    if (len1 === 0) {
        return 0;
    }
    
    for (i = 0; i < len; i++) {
        for (j = 0; j < len1; j++) {
            if (grid[i][j] !== '1') {
                continue;
            }
            
            result++;
            dfs(grid, i, j, len, len1);
        }
    }
    
    return result;
};

function dfs(grid, i, j, len, len1) {
    if (i >= len || j >= len1 || i < 0 || j < 0) {
        return;
    }
    
    if (grid[i][j] === '1') {
        grid[i][j] = '0';
        dfs(grid, i - 1, j, len, len1);
        dfs(grid, i, j - 1, len, len1);
        dfs(grid, i + 1, j, len, len1);
        dfs(grid, i, j + 1, len, len1);
    }
}
