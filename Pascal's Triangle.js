/**
Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var init = [],
        result = [],
        i;
        
    if (numRows === 0) {
        return result;
    }
    
    init.push(1);
    result.push(init);
    i = 1;
    
    while (i < numRows) {
        result = helper(result, ++i);
    }
    
    return result;
};

function helper(arr, k) {
    var len = arr.length,
        cur = arr[len - 1],
        result = [],
        i;
    
    result.push(1);
    
    for (i = 0; i < len - 1; i++) {
        result[i + 1] = cur[i] + cur[i + 1];
    }
    
    result.push(1);
    arr.push(result);
    
    return arr;
}
