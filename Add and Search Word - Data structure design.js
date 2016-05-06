/**
Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

For example:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
Note:
You may assume that all words are consist of lowercase letters a-z.

click to show hint.

You should be familiar with how a Trie works. If not, please work on this problem: Implement Trie (Prefix Tree) first.
*/

// MEMORY LIMIT EXCEEDED...

/**
 * @constructor
 */

var WordDictionary = function() {
    this.root = TrieNode();
};

var TrieNode = function() {
    var isEnd,
        links = {};
        
    return {
        containsKey: function(n) {
            return links[n] !== undefined;
        },
        get: function(ch) {
            return links[ch];
        },
        put: function(ch, node) {
            links[ch] = node;
        },
        setEnd: function() {
            isEnd = true;
        },
        isEnd: function() {
            return isEnd;
        },
        getLinks: function() {
            return links;
        }
    };
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function(word) {
    var len = word.length,
        node = this.root,
        ch,
        i;
        
    for (i = 0; i < len; i++) {
        ch = word.charAt(i);
        
        if (!node.containsKey(ch)) {
            node.put(ch, TrieNode());
        }
        
        node = node.get(ch);
    }
    
    node.setEnd();
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function(word) {
    var node = this.root;
    
    return this.searchHelper(word, node, 0);
    
};

WordDictionary.prototype.searchHelper = function(word, node, index) {
    var links,
        ch,
        i,
        j;
    
    if (index === word.length) {
        if (node.isEnd()) {
            return true;
        }
        
        return false;
    }
    
    ch = word.charAt(index);
    
    if (ch === '.') {
        links = node.getLinks();
        
        for (j in links) {
            if (this.searchHelper(word, links[j], index + 1)) {
                return true;
            }
        }
    } else if (node.containsKey(ch)) {
        return this.searchHelper(word, node.get(ch), index + 1);
    }
        return false;
}
/**
 * Your WordDictionary object will be instantiated and called as such:
 * var wordDictionary = new WordDictionary();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */
