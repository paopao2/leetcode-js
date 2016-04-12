/**
Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Ensure that numbers within the set are sorted in ascending order.


Example 1:

Input: k = 3, n = 7

Output:

[[1,2,4]]

Example 2:

Input: k = 3, n = 9

Output:

[[1,2,6], [1,3,5], [2,3,4]]
*/
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var result = [];
    
    fillResult(0, [], 1, k, n, result);
    
    return result;
};

function fillResult(curSum, curArr, startNum, k, n, result) {
    if (curArr.length > k || curSum > n) {
        return;
    }
    
    if (curArr.length === k) {
        if (curSum === n) {
            result.push(curArr.concat());
        }
        
        return;
    }
    
    var temp = curArr.concat(),
        curNum,
        i;
    
    for (i = startNum; i <= 9; i++) {
        temp.push(i);
        fillResult(curSum + i, temp, i + 1, k, n, result);
        temp.pop();
    }
}
