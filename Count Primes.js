/**
Count the number of prime numbers less than a non-negative number, n

 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var i,
        j,
        result = 0,
        prime;
    if (n === 1) {
        return 0;
    }
    for (i = 2; i < n; i++) {
        prime = true;
        for (j = 2; j*j <= i; j++) {
            if (i%j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            result++;
        }
    }
    return result;
};
