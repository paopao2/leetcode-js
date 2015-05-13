/**
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.

 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var len = s.length,
        str,
        i;
    
    if (len === 0) {
        return true;
    }
    
    str = s.replace(/\W/g, '').toLowerCase();
    len = str.length;
    
    if (len === 0) {
        return true;
    }
    
    for (i = 0; i < len/2; i++) {
         if (str.charAt(i) !== str.charAt(len - 1 - i)) {
             return false;
         }
    }
    return true;
};
