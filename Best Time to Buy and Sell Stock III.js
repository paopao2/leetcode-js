/**
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note:
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
*/
/**
 * @param {number[]} prices
 * @return {number}
 * 
 * 数组l[i]记录了price[0..i]的最大profit，
 * 数组r[i]记录了price[i..n]的最大profit。
 * 已知l[i]，求l[i+1]是简单的，同样已知r[i]，求r[i-1]也很容易。
 * 最后，我们再用O(n)的时间找出最大的l[i]+r[i]，即为题目所求。
 */
var maxProfit = function(prices) {
    var len = prices.length,
        l = [],
        r = [],
        i,
        max,
        min;
    
    l[0] = 0;
    min = prices[0];
    
    for (i = 1; i < len; i++) {
        l[i] = Math.max(l[0], prices[i] - min);
        min = Math.min(min, prices[i]);
    }
    
    r[len - 1] = 0;
    max = prices[len - 1];
    
    for (i = len - 2; i >= 0; i--) {
        r[i] = Math.max(r[i + 1], max - prices[i]);
        max = Math.max(max, prices[i]);
    }
    
    max = 0;
    
    for (i = 0; i < len; i++) {
        max = Math.max(max, l[i] + r[i]);
    }
    
    return max;
};
