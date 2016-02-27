/**
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing all 1's and return its area.

For example, given the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
Return 4.
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    var lenX = matrix.length,
        area = [],
        temp = [],
        result = 0,
        lenY,
        i,
        j;
    
    if (lenX === 0) {
        return 0;
    }
    
    lenY = matrix[0].length;
    
    // init two dimension array
    for (i = 0; i < lenX; i++) {
        area[i] = [];
    }
    
    // init first column
    for (j = 0; j < lenY; j++) {
        area[0][j] = parseInt(matrix[0][j]);
        result = Math.max(result, area[0][j]);
    }
    
    // init first row
    for (i = 0; i < lenX; i++) {
        area[i][0] = parseInt(matrix[i][0]);
        result = Math.max(result, area[i][0]);
    }
    
    for (i = 1; i < lenX; i++) {
        for (j = 1; j < lenY; j++) {
            area[i][j] = parseInt(matrix[i][j]);
            
            if (area[i][j]) {
                area[i][j] = Math.min(area[i - 1][j - 1], area[i - 1][j], area[i][j - 1]) + 1;
            }
             
            result = Math.max(result, area[i][j]);
        }
    }
    
    return result * result;
};
