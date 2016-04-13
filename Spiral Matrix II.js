/**
Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,

You should return the following matrix:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var curNum = 1,
        total = parseInt(n / 2),
        result = [],
        temp,
        level,
        i,
        j;

    if (n === 0) {
        return result;
    }

    if (n === 1) {
        temp = [1];
        result.push(temp);
        return result;
    }
    // initialization
    for (i = 0; i < n; i++) {
        temp = [];
        for (j = 0; j < n; j++) {
            temp.push(0);
        }

        result.push(temp);
    }


    for (level = 0; level < total; level++) {
        // top
        for (i = level; i < n - level - 1; i++) {
            result[level][i] = curNum;

            if (curNum === n * n) {
                return result;
            }

            curNum++;
        }

        // right
        for (i = level; i < n - level - 1; i++) {
            result[i][n - level - 1] = curNum;
            curNum++;
        }

        // bottom
        for (i = n - level - 1; i > level; i--) {
            result[n - level - 1][i] = curNum;
            curNum++;
        }

        // left
        for (i = n - level - 1; i > level; i--) {
            result[i][level] = curNum;
            curNum++;
        }
    }
    
    if (curNum === n * n) {
        result[total][total] = curNum;
    }
    
    return result;
};
