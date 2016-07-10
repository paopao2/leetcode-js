/**
Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

For example,
Given words = ["oath","pea","eat","rain"] and board =

[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
Return ["eat","oath"].
Note:
You may assume that all inputs are consist of lowercase letters a-z.

click to show hint.

You would need to optimize your backtracking to pass the larger test. Could you stop backtracking earlier?

If the current candidate does not exist in all words' prefix, you could stop backtracking immediately. What kind of data structure could answer such query efficiently? Does a hash table work? Why or why not? How about a Trie? If you would like to learn how to implement a basic trie, please work on this problem: Implement Trie (Prefix Tree) first.
*/
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let root = buildTrie(words);
    let result = [];
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(result, root, board, i, j);
        }
    }
    
    return result;
};

function dfs(result, node, board, i, j) {
    const ch = board[i][j];
    
    if (ch === '#' || !node.next[ch]) {
        return;
    }
    
    board[i][j] = '#';
    node = node.next[ch];
    
    if (node.word) {
        result.push(node.word);
        node.word = null; // dedupe
    }
    
    if (i > 0) {
        dfs(result, node, board, i - 1, j);
    }
    
    if (j > 0) {
        dfs(result, node, board, i, j - 1);
    }
    
    if (i < board.length - 1) {
        dfs(result, node, board, i + 1, j);
    }
    
    if (j < board[0].length - 1) {
        dfs(result, node, board, i , j + 1);
    }
    
    board[i][j] = ch;
}

function buildTrie(words) {
    let root = new TrieNode();
    
    words.forEach(word => {
       const chs = word.split('');
       let node = root;
       
       for(let i = 0; i < chs.length; i++) {
           const ch = chs[i];
           
           if (!node.next[ch]) {
               node.next[ch] = new TrieNode();
           }
           
           node = node.next[ch];
       }
       
       node.word = word;
    });
    
    return root;
}

class TrieNode {
    constructor() {
        this.word = null;
        this.next = {};
    }
}
