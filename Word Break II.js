/**
Given a string s and a dictionary of words dict, add spaces in s to construct a sentence where each word is a valid dictionary word.

Return all such possible sentences.

For example, given
s = "catsanddog",
dict = ["cat", "cats", "and", "sand", "dog"].

A solution is ["cats and dog", "cat sand dog"].


*/
// Time limit exceeded...
/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const len = s.length;
    let hasSeg = [];
    let result = [];
    let i, j;
    
    for (i = 0; i <= len; i++) {
        hasSeg.push(new Array(len + 1).fill(false));    
    }
    
    hasSeg[0][0] = true;
    
    for (i = 0; i <= len; i++) {
        for (j = i; j >= 0; j--) {
            if (wordDict.has(s.slice(j, i))) {
                hasSeg[j][i] = true;
            } else {
                for (let k = j; k < i; k++) {
                    if (hasSeg[j][k] && hasSeg[k][i]) {
                        hasSeg[j][i] = true;
                        break;
                    }
                }
            }
        }
    }
    
    helper(result, [], 0, s, wordDict, hasSeg);
    
    return result;
};

function helper(result, curArr, startIndex, s, wordDict, hasSeg) {
    if (startIndex === s.length) {
        result.push(curArr.join(' '));
    }
    
    for (let i = startIndex; i <= s.length; i++) {
        if (hasSeg[startIndex][i]) {
            if (wordDict.has(s.slice(startIndex, i))) {
                curArr.push(s.slice(startIndex, i));
                helper(result, curArr.concat(), i, s, wordDict, hasSeg);
                curArr.pop();
            }
        }
    }
}

// Memory limit exceeded
/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let map = {};
    
    return helper(map, s, wordDict);
};

function helper(map, s, wordDict) {
    if (map.hasOwnProperty(s)) {
        return map[s];
    }
    
    let result = [];
    
    if (s.length === 0) {
        result.push('');
        return result;
    }
    
    wordDict.forEach(word => {
        if (s.startsWith(word)) {
            let subArr = helper(map, s.slice(word.length), wordDict);
            
            result.push((word + ' ' +  subArr.join(' ')).trim());
        }
    });
    
    map[s] = result;
    return result;
}
