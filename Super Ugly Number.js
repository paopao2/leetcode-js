/**
Write a program to find the nth super ugly number.

Super ugly numbers are positive numbers whose all prime factors are in the given prime list primes of size k. For example, [1, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32] is the sequence of the first 12 super ugly numbers given primes = [2, 7, 13, 19] of size 4.

Note:
(1) 1 is a super ugly number for any given primes.
(2) The given numbers in primes are in ascending order.
(3) 0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000.
*/

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    var primeIndex = [],
        result = [],
        len = primes.length,
        tmp,
        min,
        curPrimeIndex,
        i,
        j;
        
    for (i = 0; i < len; i++) {
        primeIndex.push(0);
    }
    
    result.push(1);
    
    for (i = 1; i < n;) {
        min = Number.MAX_VALUE;
        curPrimeIndex = 0;
        for (j = 0; j < len; j++) {
            tmp = result[primeIndex[j]] * primes[j];
            
            if (tmp < min) {
                curPrimeIndex = j;
                min = tmp;
            }
        }
        
        primeIndex[curPrimeIndex]++;
        
        if (min !== result[i - 1]) {
            result[i] = min;
            i++;
        }
    }
    
    return result[n - 1];
};
