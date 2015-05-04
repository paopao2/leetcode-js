/**
Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:
Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var arr = [],
        len = triangle.length - 1,
        i,
        j;
    
    for (i = 0; i <= len; i++) {
        arr[i] = triangle[len][i];
    }
    
    for(i = len - 1; i >= 0; i--) {
        for(j = 0; j <= i; j++) {
            arr[j] = triangle[i][j] + Math.min(arr[j], arr[j + 1]);
        }
    }
    return arr[0];
};
