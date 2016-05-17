/**
Given a string s1, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.

Below is one possible representation of s1 = "great":

    great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
To scramble the string, we may choose any non-leaf node and swap its two children.

For example, if we choose the node "gr" and swap its two children, it produces a scrambled string "rgeat".

    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
We say that "rgeat" is a scrambled string of "great".

Similarly, if we continue to swap the children of nodes "eat" and "at", it produces a scrambled string "rgtae".

    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
We say that "rgtae" is a scrambled string of "great".

Given two strings s1 and s2 of the same length, determine if s2 is a scrambled string of s1.
*/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    if (s1 === s2) {
        return true;
    }
    
    if (s1 === null || s2 === null) {
        return false;
    }
    
    if (s1.length !== s2.length) {
        return false;    
    }
    
    var chars1 = s1.split(''),
        chars2 = s2.split(''),
        len = chars1.length,
        s11,
        s12,
        s21,
        s22,
        i = 0;
    
    if (len === 1) {
        return s1 === s2;
    }
    
    chars1.sort();
    chars2.sort();
    
    while (i < len) {
        if (chars1[i] !== chars2[i]) {
            return false;
        }
        
        i++;
    }
    
    for (i = 1; i < len; i++) {
        s11 = s1.slice(0, i);
        s12 = s1.slice(i);
        s21 = s2.slice(0, i);
        s22 = s2.slice(i);
        
        if (isScramble(s11, s21) && isScramble(s12, s22)) {
            return true;
        }
        
        s21 = s2.slice(0, len - i);
        s22 = s2.slice(len - i);
        
        if (isScramble(s11, s22) && isScramble(s12, s21)) {
            return true;
        }
    }
    
    return false;
};
