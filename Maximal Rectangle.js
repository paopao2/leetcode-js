/**
Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing all ones and return its area.
*/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    var rLen = matrix.length,
        cLen,
        dp = [],
        max = 0,
        stack,
        temp,
        curRow,
        i,
        j;
    
    if (rLen === 0) {
        return 0;
    }
    
    cLen = matrix[0].length;
    
    if (cLen === 1 && rLen === 1) {
        return matrix[0][0] === "1" ? 1 : 0;
    }
    
    for (i = 0; i < rLen; i++) {
        dp.push(new Array(cLen));
        
        for (j = 0; j < cLen; j++) {
            if (matrix[i][j] === '0') {
                dp[i][j] = 0;
            } else {
                if (i === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = dp[i - 1][j] + 1;
                }
                
            }
        }
    }
    
    for (i = 0; i < rLen; i++) {
        stack = [];
        
        curRow = dp[i].concat();
        curRow.push(0);
        for (j = 0; j < cLen + 1;) {
            if (stack.length > 0 && curRow[j] <= curRow[stack[stack.length - 1]]) {
                temp = stack.pop();
                max = Math.max(max, dp[i][temp] * (stack.length === 0 ? j : j - stack[stack.length - 1] - 1));
            } else {
                stack.push(j);
                j++;
            }
        }
    }
    
    return max;
};
