/**
There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

For example,
Given the following words in dictionary,

[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]
The correct order is: "wertf".

Note:
You may assume all letters are in lowercase.
If the order is invalid, return an empty string.
There may be multiple valid order of letters, return any one of them is fine.
*/
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    if (words.length === 0) {
        return '';
    }
    
    const len = words.length;
    let map = {}; // value is the prerequisite of key
    let charPreReqCount = {};
    let i;
    let queue = [];
    let result = [];
    let hasCycle = false;
    
    for (i = 0; i < len; i++) {
        const chars = words[i].split('');
        
        let j = 0;
        
        for (j = 0; j < chars.length; j++) {
            if (!map[chars[j]]) {
                map[chars[j]] = [];
                charPreReqCount[chars[j]] = 0;
            }
        }

        if (i === 0 || words[i] === words[i - 1]) {
            continue;
        }
        
        const cur = words[i];
        const prev = words[i - 1];
        j = 0;
        
        while(j < cur.length && j < prev.length && cur.charAt(j) === prev.charAt(j)) {
            j++;
        }
        
        if (j < prev.length && map[prev.charAt(j)].indexOf(cur.charAt(j)) === -1) {
            map[prev.charAt(j)].push(cur.charAt(j));
            
            charPreReqCount[cur.charAt(j)]++;
        }
    }
    
    Object.keys(charPreReqCount).forEach(char => {
        if (charPreReqCount[char] === 0) {
            queue.push(char);
        }
    });
    
    while(queue.length > 0) {
        const char = queue.shift();
        
        result.push(char);
        
        for (i = 0; i < map[char].length; i++) {
            charPreReqCount[map[char][i]]--;
            
            if (charPreReqCount[map[char][i]] === 0) {
                queue.push(map[char][i]);
            }
        }
    }
    
    // detect cycle
    Object.keys(charPreReqCount).forEach(function(char) {
        if (charPreReqCount[char] !== 0) {
            hasCycle = true;
        }
    });
    
    return hasCycle ? '' : result.join('');
};
