/**
Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,
There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
The total number of unique paths is 2.

Note: m and n will be at most 100.


*/
/**
 * @param {number[][]} obstacle
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacle) {
    var rLen = obstacle.length,
        matrix = [],
        cLen,
        i,
        j;
        
    if (rLen === 0) {
        return 0;    
    }
    
    cLen = obstacle[0].length;
    
    if (obstacle[0][0] === 1) {
        return 0;
    }
    
    for (i = 0; i < rLen; i++) {
        matrix.push(new Array(cLen));
    }
    
    matrix[0][0] = 1;
    for (i = 1; i < cLen; i++) {
        matrix[0][i] = (obstacle[0][i] || !matrix[0][i - 1])? 0 : 1; 
    }
    
    for (i = 1; i < rLen; i++) {
        matrix[i][0] = (obstacle[i][0] || !matrix[i - 1][0])? 0 : 1;
    }
    
    for (i = 1; i < rLen; i++) {
        for (j = 1; j < cLen; j++) {
            if (obstacle[i][j]) {
                matrix[i][j] = 0;
            } else {
                matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
            }
        }
    }
    
    return matrix[rLen - 1][cLen - 1];
};
