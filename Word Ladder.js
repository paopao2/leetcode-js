/**
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time
Each intermediate word must exist in the word list
For example,

Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]
As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

Note:
Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
*/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    var visit = {},
        len = beginWord.length,
        queue = [],
        charArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        curNode,
        curStr,
        tempStr,
        tempNode,
        i,
        j;
    
    curNode = new node(beginWord, 1);
    visit[curNode.str] = true;
    queue.push(curNode);
    

    while (queue.length > 0) {
        curNode = queue.shift();
        curStr = curNode.str;
        for (i = 0; i < len; i++) {
            for (j = 0; j < 26; j++) {
                if (charArr[j] === curStr.charAt(i)) {
                    continue;
                }
                
                tempStr = curStr.substring(0, i) + charArr[j] + curStr.substring(i + 1, len);
                
                if (tempStr === endWord) {
                    return curNode.step + 1;
                }
                
                if (wordList.has(tempStr) && !visit.hasOwnProperty(tempStr)) {
                    visit[tempStr] = true;
                    tempNode = new node(tempStr, curNode.step + 1);
                    queue.push(tempNode);
                }
            }
        }
    }
        
    return 0;
};

function node(str, step) {
    this.str = str;
    this.step = step;
}
