/**
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var i,
        length = prices.length,
        low,
        high,
        max = 0,
        cur;
        
    if (length === 0) {
        return 0;
    }
    low = prices[0];
    high = low;
    for (i = 1; i < length; i++) {
        cur = prices[i];
        if (cur > high) {
            high = cur;
        }else if (cur < low) {
            //need to reset low and high in order to make sure you need to buy before you sell
            low = cur;
            high = cur;
        }
        if (high - low > max) {
            max = high - low;
        }
    }
    return max;
};
