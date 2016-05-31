/**
Implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "a*") → true
isMatch("aa", ".*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * 
 * The most critical observation is that "x*" can either match empty string, or at least one x. In the latter case, it is equivalent to "xx*" or "x*x"
 * 
 *  
        'match' below including .
    f(i,j) means s where s.len=i matches p where p.len=j
    f(i,j) =
        if (p_j-1 != * ) f(i-1, j-1) and s_i-1 matches p_j-1
        if (p_j-1 == * )
            * matches zero times: f(i,j-2)
            or * matches at least one time: f(i-1,j) and s_i-1 matches p_j-2
 */
var isMatch = function(s, p) {
    var lenS = s.length,
        lenP = p.length,
        f = [],
        i,
        j;
    
    if (p.length === 0) {
        return s.length === 0;
    }
    
    if (p.charAt(0) === '*') {
        return false;
    }
    
    for (i = 0; i <= lenS; i++) {
        f.push(new Array(lenP + 1));
        for (j = 0; j <= lenP; j++) {
            f[i][j] = false;
        }
    }
    
    f[0][0] = true;
    
    for (i = 1; i < lenP; i++) {
        if (p.charAt(i) === '*') {
            f[0][i + 1] = f[0][i - 1];
        }
    }
    
    for (i = 1; i <= lenS; i++) {
        for (j = 1; j <= lenP; j++) {
            if (p.charAt(j - 1) === '*') {
                f[i][j] = f[i][j - 2] || (f[i - 1][j] && (s.charAt(i - 1) === p.charAt(j - 2) || p.charAt(j - 2) === '.'));
            } else {
                f[i][j] = f[i - 1][j - 1] && (s.charAt(i - 1) === p.charAt(j - 1) || p.charAt(j - 1) === '.');
            }
        }
    }
    
    return f[lenS][lenP];
};


// TIME LIMIT EXCEEDED
var isMatch = function(s, p) {
    var lenS = s.length,
        lenP = p.length,
        i,
        j;
    
    if (p.length === 0) {
        return s.length === 0;
    }
    
    if (p.charAt(1) === '*') {
        return isMatch(s, p.substr(2)) || s.length > 0 && (s.charAt(0) === p.charAt(0) || p.charAt(0) === '.') && isMatch(s.substr(1), p);
    } else {
        return s.length > 0 && (s.charAt(0) === p.charAt(0) || p.charAt(0) === '.') && isMatch(s.substr(1), p.substr(1));
    }

};
