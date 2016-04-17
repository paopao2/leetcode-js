/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var arr = [],
        i,
        j;
    
    arr[0] = 0;
    
    for (i = 1; i <= n; i++) {
        arr[i] = Number.MAX_VALUE;
    }
    
    for (i = 0; i <= n; i++) {
        for (j = 1; i + j * j <= n; j++) {
            arr[i + j * j] = Math.min(arr[i + j * j], arr[i] + 1);
        }
    }
    
    return arr[n];
};

// SOLUTION 2
/**
 * 根据四平方和定理，任意一个正整数均可表示为4个整数的平方和，其实是可以表示为4个以内的平方数之和，那么就是说返回结果只有1,2,3或4其中的一个，首先我们将数字化简一下，由于一个数如果含有因子4，那么我们可以把4都去掉，并不影响结果，比如2和8,3和12等等，返回的结果都相同，读者可自行举更多的栗子。
 * 还有一个可以化简的地方就是，如果一个数除以8余7的话，那么肯定是由4个完全平方数组成，这里就不证明了，因为我也不会证明，读者可自行举例验证。那么做完两步后，一个很大的数有可能就会变得很小了，大大减少了运算时间，下面我们就来尝试的将其拆为两个平方数之和，如果拆成功了那么就会返回1或2，因为其中一个平方数可能为0. 
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    while(n % 4 === 0) {
        n /= 4;
    }
    
    if (n % 8 === 7) {
        return 4;
    }
    
    var i,
        j;
    
    // check if it's 1 or 2
    for (i = 0; i * i <= n; i++) {
        j = parseInt(Math.sqrt(n - i * i));
        if (i * i + j * j === n) {
            return (i === 0 || j === 0)? 1 : 2;
        }
    }
    
    return 3;
};
