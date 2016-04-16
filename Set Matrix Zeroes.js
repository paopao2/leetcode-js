/**
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

click to show follow up.

Follow up:
Did you use extra space?
A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var rLen = matrix.length,
        cLen,
        i,
        j,
        firstRowZero,
        firstColumnZero;
        
    if (rLen === 0) {
        return;
    }
    
    cLen = matrix[0].length;
    
    if (matrix[0][0] === 0) {
        firstRowZero = true;
        firstColumnZero = true;
    } else {
        for (i = 1; i < cLen; i++) {
            if (matrix[0][i] === 0) {
                firstRowZero = true;
                break;
            }
        }
        
        for (i = 1; i < rLen; i++) {
            if (matrix[i][0] === 0) {
                firstColumnZero = true;
                break;
            }
        }
    }
    
    for (i = 1; i < rLen; i++) {
        for (j = 1; j < cLen; j++) {
             if (matrix[i][j] === 0) {
                 matrix[0][j] = 0;
                 matrix[i][0] = 0;
             }
        }
    }
    
    for (i = 1; i < cLen; i++) {
        if (matrix[0][i] === 0) {
            for (j = 1; j < rLen; j++) {
                matrix[j][i] = 0;
            }
        }
    }
    
    for (i = 1; i < rLen; i++) {
        if (matrix[i][0] === 0) {
            for (j = 1; j < cLen; j++) {
                matrix[i][j] = 0;
            }
        }
    }
    
    if (firstRowZero) {
        for (i = 0; i < cLen; i++) {
            matrix[0][i] = 0;
        }
    }
    
    if (firstColumnZero) {
        for (j = 0; j < rLen; j++) {
            matrix[j][0] = 0;
        }
    }
};
