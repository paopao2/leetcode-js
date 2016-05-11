/**
Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Examples:
"()())()" -> ["()()()", "(())()"]
"(a)())()" -> ["(a)()()", "(a())()"]
")(" -> [""]

*/
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    var result = [];
    
    dfs(result, s, '', 0, 0);
    
    if (result.length === 0) {
        result.push('');
    }
    
    return result;
};

var max = 0; // max is to make sure we're removing the minimum number of parentheses

function dfs(result, str, curStr, leftCount, leftAccumulated) {
    if (str.length === 0) {
        if (curStr.length > 0 && leftCount === 0) {
            if (max < leftAccumulated) {
                max = leftAccumulated;
            }
            
            if (max === leftAccumulated && result.indexOf(curStr) === -1) {
                result.push(curStr);
            }
        }
        
        return;
    }
    
    var char = str.charAt(0);
    
    if (char === '(') {
        // keep (
        dfs(result, str.substr(1), curStr + '(', leftCount + 1, leftAccumulated + 1);
        // not keep (
        dfs(result, str.substr(1), curStr, leftCount, leftAccumulated);
    } else if (char === ')') {
        if (leftCount > 0) {
            dfs(result, str.substr(1), curStr + ')', leftCount - 1, leftAccumulated);
        }
        
        dfs(result, str.substr(1), curStr, leftCount, leftAccumulated);
    } else {
        dfs(result, str.substr(1), curStr + char, leftCount, leftAccumulated);
    }
}
