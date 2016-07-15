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
update(3, 2, 2)
sumRegion(2, 1, 4, 3) -> 10

Note:

    The matrix is only modifiable by the update function.
    You may assume the number of calls to update and sumRegion function is distributed evenly.
    You may assume that row1 ≤ row2 and col1 ≤ col2.

*/
/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix;
    this.rowLen = matrix.length;
    this.colLen = this.rowLen === 0 ? 0 : matrix[0].length;
    this.colSum = []; // colSum[i][j] means column sum from matrix[0][j] to matrix[i][j]
    
    for (let i = 0; i < this.rowLen; i++) {
        this.colSum.push(new Array(this.colLen).fill(0));
    }
    
    for (let i = 0; i < this.rowLen; i++) {
        for (let j = 0; j < this.colLen; j++) {
            if (i === 0) {
                this.colSum[i][j] = this.matrix[i][j];
            } else {
                this.colSum[i][j] = this.matrix[i][j] + this.colSum[i - 1][j];
            }
        }
    }
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
    for (let i = row; i < this.rowLen; i++) {
        this.colSum[i][col] += val - this.matrix[row][col];
    }
    
    this.matrix[row][col] = val;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let result = 0;
    
    for (let i = col1; i <= col2; i++) {
        if (row1 === 0) {
            result += this.colSum[row2][i];
        } else {
            result += this.colSum[row2][i] - this.colSum[row1 - 1][i];
        }
    }
    
    return result;
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.update(1, 1, 10);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */
