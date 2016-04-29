/**
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

For example,
Given board =

[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "ABCCED", -> returns true,
word = "SEE", -> returns true,
word = "ABCB", -> returns false.
*/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var rLen = board.length,
        cLen = board[0].length;
        
    return helper(word, board, rLen, cLen);
};

function helper(word, board, rLen, cLen) {
    var ch = word.charAt(0),
        i,
        j;
        
    for (i = 0; i < rLen; i++) {
        for (j = 0; j < cLen; j++) {
            if (board[i][j] === ch) {
                board[i][j] = '*';
                if (bfs(1, word, i, j, board, rLen, cLen)) {
                    return true;
                }
                board[i][j] = ch;
            }
        }
    }
    
    return false;
}

function bfs(index, word, i, j, board, rLen, cLen) {
    if (index === word.length) {
        return true;
    }
    
    var ch = word.charAt(index);
    
    if (i - 1 >= 0 && board[i - 1][j] === ch) {
        board[i - 1][j] = '*';
        
        if (bfs(index + 1, word, i - 1, j, board, rLen, cLen)) {
            return true;
        }
        
        board[i - 1][j] = ch;
    }
    
    if (j - 1 >= 0 && board[i][j - 1] === ch) {
        board[i][j - 1] = '*';
        
        if (bfs(index + 1, word, i, j - 1, board, rLen, cLen)) {
            return true;
        }
        
        board[i][j - 1] = ch;
    } 
    
    if (i + 1 < rLen && board[i + 1][j] === ch) {
        board[i + 1][j] = '*';
        
        if (bfs(index + 1, word, i + 1, j, board, rLen, cLen)) {
            return true;
        }
        
        board[i + 1][j] = ch;
    }
    
    if (j + 1 < cLen && board[i][j + 1] === ch) {
        board[i][j + 1] = '*';
        
        if (bfs(index + 1, word, i, j + 1, board, rLen, cLen)) {
            return true;
        }
        
        board[i][j + 1] = ch;
    }
    
}
