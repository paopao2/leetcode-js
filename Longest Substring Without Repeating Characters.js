/**
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = s.length,
        max = 0,
        chars = new Set(),
        leftBound = 0,
        ch,
        i;
        
    for (i = 0; i < len; i++) {
        ch = s.charAt(i);
        
        if (chars.has(ch)) {
            // find the repeating character
            while (leftBound < i && s.charAt(leftBound) !== ch) {
                chars.delete(s.charAt(leftBound));
                leftBound++;
            }
            
            leftBound++;
        } else {
            chars.add(ch);
            max = Math.max(max, i - leftBound + 1);
        }
    }
    
    return max;
};
