/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var i,
        j,
        result = [];
    
    result[0] = 1;
    result[1] = 1;
    
    for (i = 2; i <= n; i++) {
        result[i] = 0;
        for (j = 0; j < i; j++) {
            result[i] += result[j] * result[i - 1 - j];
        }
        
    }
    return result[n];
};
