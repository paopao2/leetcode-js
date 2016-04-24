/**
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var len = s.length,
        result = s.split(''),
        vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']),
        indice = [],
        arr = [],
        ch,
        i;
        
    for (i = 0; i < len; i++) {
        ch = result[i];
        
        if (vowelSet.has(ch)) {
            arr.push(ch);
            indice.push(i);
        }
    }
    
    for (i = 0; i < indice.length; i++) {
        result[indice[i]] = arr.pop();
    }
    
    return result.join('');
};
