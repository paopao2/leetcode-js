/**
Implement a trie with insert, search, and startsWith methods.

Note:
You may assume that all inputs are consist of lowercase letters a-z.
*/
/**
 * @constructor
 * Initialize your data structure here.
 */
 
 // MEMORY LIMIT EXCEEDED
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
        }
    };
};

var Trie = function() {
    this.root = TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word) {
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
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function(word) {
    var node = this.searchPrefix(word);
    
    return node && node.isEnd();
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function(prefix) {
    return this.searchPrefix(prefix) !== null;
};

Trie.prototype.searchPrefix = function(prefix) {
    var len = prefix.length,
        node = this.root,
        ch,
        i;
        
    for (i = 0; i < len; i++) {
        ch = prefix.charAt(i);
        
        if (!node.containsKey(ch)) {
            return null;
        }
        
        node = node.get(ch);
    }
    
    return node;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */arch("theomachia"),search("roughy"),search("hypotarsal"),search("snooze"),search("pronominalize"),search("proselytist"),search("lingel")
