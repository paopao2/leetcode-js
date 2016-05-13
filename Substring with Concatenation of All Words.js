/**
You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

For example, given:
s: "barfoothefoobarman"
words: ["foo", "bar"]

You should return the indices: [0,9].
(order does not matter).
*/
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 
 // TIME LIMIT EXCEEDED...
var findSubstring = function(s, words) {
    var len = s.length,
        wordsLen = words.length,
        wordLen = words[0].length,
        i,
        j,
        m,
        temp,
        toFound = {},
        found = {},
        result = [];
        
    for (i = 0; i < wordsLen; i++) {
        if (!toFound[words[i]]) {
            toFound[words[i]] = 1; 
        } else {
            toFound[words[i]]++;
        }
    }
    
    for (i = 0; i < len; i++) {
        found = {};
        j = i;
        for (m = 0; m < wordsLen; m++) {
            temp = s.slice(j, j + wordLen);
            
            if (!toFound[temp]) {
                break;
            }
            
            if (toFound[temp]) {
                if (!found[temp]) {
                    found[temp] = 1;
                } else {
                    found[temp]++;
                }
            }
            
            if (found[temp] > toFound[temp]) {
                break;
            }
            
            j += wordLen;
        }
        
        if (m === wordsLen) {
            result.push(i);
        }
    }
    
    return result;
};
