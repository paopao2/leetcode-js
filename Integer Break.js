/**
Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).

Note: you may assume that n is not less than 2.

Hint:

There is a simple O(n) solution to this problem.
You may check the breaking results of n ranging from 7 to 10 to discover the regularities.
*/
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    var dp = [],
        i;
    
    if (n <= 3) {
        return n - 1;
    }
    
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;
    
    for (i = 4; i <= n; i++) {
        dp[i] = Math.max(dp[i - 2] * 2, dp[i - 3] * 3);
    }
    
    return dp[n];
};


// SOLUTION 2
/**
 * @param {number} n
 * @return {number}
 * 可以说，拆成3的比拆成2的乘积大。 比如6的时候 2*2*2 < 3*3

我们希望能尽可能的拆成3，然后才是2.

所以，如果

n % 3 == 0:  那么全部拆成3
n % 3 == 1:  2个2剩下的为3    4*3^(x-1) > 1*3^x
n % 3 == 2:  1个2剩下的为3
 */
var integerBreak = function(n) {
    var dp = [],
        i;
    
    if (n <= 3) {
        return n - 1;
    }
    
    switch(n % 3) {
        case 0:
            return Math.pow(3, n / 3);
        case 1:
            return 4 * Math.pow(3, parseInt(n / 3) - 1);
        case 2:
            return 2 * Math.pow(3, parseInt(n / 3));
    }
};
