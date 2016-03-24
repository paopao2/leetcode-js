/**
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var len = matrix.length,
        i,
        level,
        tmp;
    
    level = 0;
    
    while (level < len/2) {
        for (i = level; i < len - level - 1; i++) {
           tmp = matrix[level][i];
           matrix[level][i] = matrix[len - i - 1][level];
           matrix[len - i - 1][level] = matrix[len - 1 - level][len - 1 - i];
           matrix[len - 1 - level][len - 1 - i] = matrix[i][len - 1 - level];
           matrix[i][len - 1 - level] = tmp;
        }
        level++;
    }
};
