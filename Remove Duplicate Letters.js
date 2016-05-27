/**
Given a string which contains only lowercase letters, remove duplicate letters so that every letter appear once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

Example:
Given "bcabc"
Return "abc"

Given "cbacdcbc"
Return "acdb"
*/

// recursive solution
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    var count = {},
        len = s.length,
        startPos = 0,
        curChar,
        i;
        
    if (len === 0) {
        return '';
    }
    
    for (i = 0; i < len; i++) {
        count[s.charAt(i)] = (count[s.charAt(i)] ? count[s.charAt(i)] + 1 : 1);
    }
    
    for (i = 0; i < len; i++) {
        if (s.charAt(i) < s.charAt(startPos)) {
            startPos = i;
        }
        
        // find the first non duplicate letter
        if (--count[s.charAt(i)] === 0) {
            break;
        }
    }
    
    curChar = s.charAt(startPos);
    
    return curChar + removeDuplicateLetters(s.substr(startPos + 1).replace(new RegExp(curChar, 'g'), ''));
};


// stack solution
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    var count = {},
        len = s.length,
        stack = [],
        visited = {},
        curChar,
        i;
        
    if (len === 0) {
        return '';
    }
    
    for (i = 0; i < len; i++) {
        count[s.charAt(i)] = (count[s.charAt(i)] ? count[s.charAt(i)] + 1 : 1);
    }
    
    for (i = 0; i < len; i++) {
        count[s.charAt(i)]--;
        
        if (visited[s.charAt(i)]) {
            continue;
        }
        
        while (stack.length > 0 && stack[stack.length - 1] > s.charAt(i) && count[stack[stack.length - 1]] > 0) {
            visited[stack[stack.length - 1]] = false;
            stack.pop();
        }
        
        stack.push(s.charAt(i));
        visited[s.charAt(i)] = true;
    }
    
    return stack.join('');
};
