/**
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var i,
        length = prices.length,
        low,
        high,
        cur,
        prev,
        temp = 0
        max = 0;
    
    if (length === 0 || length === 1) {
        return max;
    }
    low = prices[0];
    high = prices[0];
    prev = low;
    for (i = 1; i < length; i++) {
        cur = prices[i];
        if (cur > prev) {
            high = cur;
            temp = high - low;
        } else if (cur < prev) {
            max += temp;
            temp = 0;
            low = cur;
            high = cur;
        }
        prev = cur;
    }
    if (temp !== 0) {
        max += temp;
    }
    return max;
};
