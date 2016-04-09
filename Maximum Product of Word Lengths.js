/**
Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

Example 1:
Given ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]
Return 16
The two words can be "abcw", "xtfn".

Example 2:
Given ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]
Return 4
The two words can be "ab", "cd".

Example 3:
Given ["a", "aa", "aaa", "aaaa"]
Return 0
No such pair of words.
*/

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    var len = words.length,
        arr = [],
        result = 0,
        i,
        j;
    
    for (i = 0; i < len; i++) {
        arr[i] = 0;
        
        for (j = 0; j < words[i].length; j++) {
            arr[i] |= (1 << (words[i].charCodeAt(j) - 97));
        }
    }
    
    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            if ((arr[i] & arr[j]) === 0) {
                result = Math.max(result, words[i].length * words[j].length);
            }
        }
    }
    
    return result;
};
