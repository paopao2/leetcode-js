/**
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
For example,

Consider the following matrix:

[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
Given target = 3, return true.
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var rLen = matrix.length,
        cLen,
        start,
        end,
        mid,
        i,
        j;
        
    if (rLen === 0) {
        return false;
    }
    
    cLen = matrix[0].length;
    start = 0;
    end = rLen * cLen - 1;
    
    while (start <= end) {
        mid = parseInt((start + end) / 2);
        i = parseInt(mid / cLen);
        j = mid % cLen;
        
        if (matrix[i][j] === target) {
            return true;
        }
        
        if (matrix[i][j] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    return false;
};
