/**
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
For example,

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var rowLen = matrix.length,
        columnLen,
        value,
        i,
        j;
        
    if (rowLen === 0) {
        return false;
    }
    
    columnLen = matrix[0].length;
    
    if (columnLen === 0) {
        return false;
    }
    
    i = 0;
    j = columnLen - 1;
    
    while (i < rowLen && j >= 0) {
        value = matrix[i][j];
        
        if (target > value) {
            i++;
        } else if (target < value) {
            j--;
        } else {
            return true;
        }
    }
    
    return false;
};

// Time limit exceeded...
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var rowLen = matrix.length,
        columnLen,
        i,
        j;
        
    if (rowLen === 0) {
        return false;
    }
    
    columnLen = matrix[0].length;
    
    if (columnLen === 0) {
        return false;
    }
    
    return helper(0, rowLen - 1, 0, columnLen - 1, target, matrix);
};

function helper(rowStart, rowEnd, colStart, colEnd, target, matrix) {
    if (rowStart > rowEnd || colStart > colEnd) {
        return false;
    }
    
    var rowMid = Math.floor((rowStart + rowEnd) / 2),
        colMid = Math.floor((colStart + colEnd) / 2),
        value = matrix[rowMid][colMid];
    
    if (value < target) {
        return helper(rowStart, rowEnd, colMid + 1, colEnd, target, matrix) || helper(rowMid + 1, rowEnd, colStart, colMid, target, matrix) || helper(rowMid + 1, rowEnd, colMid + 1, colEnd, target, matrix);
    } else if (value > target) {
        return helper(rowStart, rowEnd - 1, colMid, colEnd, target, matrix) || helper(rowMid, rowEnd, colStart, colMid - 1, target, matrix) || helper(rowStart, rowMid - 1, colStart, colMid - 1, target, matrix);
    }
    
    return true;
}
