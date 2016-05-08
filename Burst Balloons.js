/**
Given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by array nums. You are asked to burst all the balloons. If the you burst balloon i you will get nums[left] * nums[i] * nums[right] coins. Here left and right are adjacent indices of i. After the burst, the left and right then becomes adjacent.

Find the maximum coins you can collect by bursting the balloons wisely.

Note: 
(1) You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not burst them.
(2) 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100

Example:

Given [3, 1, 5, 8]

Return 167

    nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
   coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
*/
/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 状态转移方程：

dp[l][r] = max(dp[l][r], nums[l] * nums[m] * nums[r] + dp[l][m] + dp[m][r])
dp[l][r]表示扎破(l, r)范围内所有气球获得的最大硬币数，不含边界；

l与r的跨度k从2开始逐渐增大；

三重循环依次枚举范围跨度k，左边界l，中点m；右边界r = l + k；
 */
var maxCoins = function(nums) {
    var len = nums.length,
        dp = [],
        i,
        k,
        l,
        m,
        r;
        
    for (i = 0; i <= len + 1; i++) {
        dp.push(new Array(len + 1));
    }
    
    for (i = 0; i <= len + 1; i++) {
        for (k = 0; k <= len + 1; k++) {
            dp[i][k] = 0;
        }
    }
    
    nums[len + 1] = 1;
    
    for (i = len; i > 0; i--) {
        nums[i] = nums[i - 1];
    }
    
    nums[0] = 1;
    
    len += 2;
    
    for (k = 2; k < len; k++) {
        for (l = 0; l < len - k; l++) {
            r = l + k;
            
            for (m = l + 1; m < r; m++) {
                dp[l][r] = Math.max(dp[l][r], dp[l][m] + dp[m][r] + nums[l]*nums[m]*nums[r]);
            }
        }
    }
    
    return dp[0][len - 1];
};
