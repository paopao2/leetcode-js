/**
Given a string of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. The valid operators are +, - and *.


Example 1
Input: "2-1-1".

((2-1)-1) = 0
(2-(1-1)) = 2
Output: [0, 2]


Example 2
Input: "2*3-4*5"

(2*(3-(4*5))) = -34
((2*3)-(4*5)) = -14
((2*(3-4))*5) = -10
(2*((3-4)*5)) = -10
(((2*3)-4)*5) = 10
Output: [-34, -14, -10, -10, 10]
*/
/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    var len = input.length,
        result = [],
        left,
        right,
        curChar,
        i,
        j,
        k;
    
    for (i = 0; i < len; i++) {
        curChar = input.charAt(i);
        
        if (curChar === '+' || curChar === '-' || curChar === '*') {
            left = diffWaysToCompute(input.substring(0, i));
            right = diffWaysToCompute(input.substring(i + 1));
            
            for (j = 0; j < left.length; j++) {
                for (k = 0; k < right.length; k++) {
                    if (curChar === '+') {
                        result.push(left[j] + right[k]);
                    } else if (curChar === '-') {
                        result.push(left[j] - right[k]);
                    } else {
                        result.push(left[j] * right[k]);
                    }
                }
            }
        }
    }
    
    if (result.length === 0) {
        result.push(parseInt(input));
    }
    
    return result;
};
