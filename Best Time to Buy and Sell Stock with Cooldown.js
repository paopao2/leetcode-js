/**
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
Example:

prices = [1, 2, 3, 0, 2]
maxProfit = 3
transactions = [buy, sell, cooldown, buy, sell]
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var len = prices.length,
        buy = [],
        sell = [],
        i;
    
    if (len < 2) {
        return 0;
    }
    
    // buy[i] 是指在第i天手上持有股票的最大收益
    // sell[i] 是指在第i天手上没有股票的最大收益
    buy[0] = 0 - prices[0];
    buy[1] = Math.max(0 - prices[0], 0 - prices[1]);
    sell[0] = 0;
    sell[1] = Math.max(0, buy[0] + prices[1]);
    
    for (i = 2; i < len; i++) {
        buy[i] = Math.max(buy[i - 1], sell[i - 2] - prices[i]);
        sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
    }
    
    return sell[len - 1];
};
