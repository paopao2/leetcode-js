/**
According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state.

Follow up: 
Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    var len = board.length,
        lives,
        cLen,
        i,
        j,
        x,
        y;
        
    if (len === 0) {
        return;
    }
    
    cLen = board[0].length;
    
    for (i = 0; i < len; i++) {
        for (j = 0; j < cLen; j++) {
            lives = 0;
            
            for (x = Math.max(i - 1, 0); x <= Math.min(i + 1, len - 1); x++) {
                for (y = Math.max(j - 1, 0); y <= Math.min(j + 1, cLen - 1); y++) {
                    lives += (board[x][y] & 1);
                }
            }
            
            // only care the ones that'll be live
            if (lives === 3 || lives - board[i][j] === 3) {
                board[i][j] |= 2;
            }
        }
    }
    
    for (i = 0; i < len; i++) {
        for (j = 0; j < cLen; j++) {
            board[i][j] >>= 1;
        }
    }
};
