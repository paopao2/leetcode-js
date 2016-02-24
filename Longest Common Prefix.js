/**
Write a function to find the longest common prefix string amongst an array of strings.
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var len = strs.length,
        len1,
        curChar,
        i,
        j;
    
    if (len === 0) {
        return '';
    }
    
    len1 = strs[0].length;
    for (i = 0; i < len1; i++) {
        curChar = strs[0].charAt(i);
        for (j = 1; j < len; j++) {
            if (strs[j].charAt(i) !== curChar) {
                return i === 0? '' : strs[0].substr(0, i);
            }
            
            if (strs[j].length === i) {
                return strs[j];
            }
        }
    }
    
    return strs[0];
};
