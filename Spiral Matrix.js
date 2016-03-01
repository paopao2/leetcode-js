/**
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var rowL = matrix.length,
        result = [],
        columnL;
        
    if (rowL === 0) {
        return result;
    }
    
    columnL = matrix[0].length;
    
    helper(0, rowL, columnL, matrix, result);
    return result;
};

function helper(level, row, column, matrix, result) {
    var i;
    
    if (row === 0 || column === 0) {
        return;
    } else if (row === 1) {
        for (i = 0; i < column; i++) {
            result.push(matrix[level][i + level]);
        }
    } else if (column === 1) {
        for (i = 0; i < row; i++) {
            result.push(matrix[i + level][level]);
        }
    } else {
        // top
        for (i = 0; i < column - 1; i++) {
            result.push(matrix[level][i + level]);
        }
        
        // right
        for (i = 0; i < row - 1; i++) {
            result.push(matrix[i + level][column + level - 1]);
        }
        
        // bottom
        for (i = column - 1; i > 0; i--) {
            result.push(matrix[row + level - 1][i + level]);
        }
        
        // left
        for (i = row - 1; i > 0; i--) {
            result.push(matrix[i + level][level]);
        }
        
        helper(level + 1, row - 2, column - 2, matrix, result);
    }
}
