/**
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

For example,
If n = 4 and k = 2, a solution is:

[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var result = [];
    
    helper(1, [], n, k, result);
    
    return result;
};

function helper(start, curArr, n, k, result) {
    if (curArr.length === k) {
        result.push(curArr);
        return;
    }
    
    var i,
        temp;
     
    for (i = start; i <= n; i++) {
        curArr.push(i);
        helper(i + 1, curArr.concat(), n, k, result);
        curArr.pop();
    }
}
