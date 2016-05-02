/**
Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

Range Sum Query 2D
The above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.

Example:
Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12
Note:
You may assume that the matrix does not change.
There are many calls to sumRegion function.
You may assume that row1 ≤ row2 and col1 ≤ col2.
*/

 /**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    var sum = [],
        rLen = matrix.length,
        cLen,
        i,
        j;
    
    if (rLen === 0) {
        this.sum = null;
        return;
    }
    
    cLen = matrix[0].length;
    
    for (i = 0; i < rLen; i++) {
        sum.push(new Array(cLen));
    }    
    
    sum[0][0] = matrix[0][0];
    
    for (i = 1; i < rLen; i++) {
        sum[i][0] = sum[i - 1][0] + matrix[i][0];
    }
    
    for (j = 1; j < cLen; j++) {
        sum[0][j] = sum[0][j - 1] + matrix[0][j];
    }
    
    for (i = 1; i < rLen; i++) {
        for (j = 1; j < cLen; j++) {
            sum[i][j] = sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1] + matrix[i][j];
        }
    }
    
    this.sum = sum;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    if (!this.sum) {
        return 0;
    }
    
    var result = this.sum[row2][col2];
    
    if (row1 > 0) {
        result -= this.sum[row1 - 1][col2];
    }
    
    if (col1 > 0) {
        result -= this.sum[row2][col1 - 1];
    }
    
    if (row1 > 0 && col1 > 0) {
        result += this.sum[row1 - 1][col1 - 1];
    }
    
    return result;
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */
