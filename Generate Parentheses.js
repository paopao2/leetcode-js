// TODO: optimize
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var i = 1,
        result = [];
    
    if (n === 0) {
        return result;
    }
    
    result.push('()');
    
    while (i < n) {
        result = helper(result);
        i++;
    }
    
    return result;
};

function helper(arr) {
    var len = arr.length,
        result = [],
        len1,
        curStr,
        tmp,
        i,
        j;
        
    len1 = arr[0].length;
    
    for (i = 0; i < len; i++) {
        curStr = arr[i];
        
        for (j = 0; j < len1; j++) {
            tmp = curStr.substring(0, j) + '()' + curStr.substring(j);
            
            if (result.indexOf(tmp) === -1) {
                result.push(tmp);
            }
        }
    }
    
    return result;
}
