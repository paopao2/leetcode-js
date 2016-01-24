/**
Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], and [3,2,1].
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    function getPerm(arr, numss, n) {
        var len = arr.length,
            result = [],
            len1,
            x,
            copy,
            i,
            j;
        
        if (n === numss.length) {
            return arr;
        }
        
        x = numss[n];
        len1 = arr[0].length;
        
        for (i = 0; i < len; i++) {
            for (j = 0; j <= len1; j++) {
                copy = arr[i].slice(0);
                copy.splice(j, 0, x);
                result.push(copy);
            }
        }
        
        return getPerm(result, numss, n + 1);
    }
    var initArr = [],
        initElement = [];
    
    initArr.push(initElement);
    return getPerm(initArr, nums, 0);
    
};
