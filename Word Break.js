/**
Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

For example, given
s = "leetcode",
dict = ["leet", "code"].

Return true because "leetcode" can be segmented as "leet code".
*/
/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var hasFound = [],
        len = s.length,
        i,
        j;
    
    hasFound[0] = true;
    
    for (i = 1; i <= len; i++) {
        for (j = 0; j < i; j++) {
            if (hasFound[j] && wordDict.has(s.substring(j, i))) {
                hasFound[i] = true;
                break;
            }
        }
    }
    
    return hasFound[len] === true;
};
