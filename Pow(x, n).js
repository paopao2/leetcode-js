/**
Implement pow(x, n).
*/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0) {
        return 1 / power(x, n);
    }
    
    return power(x, n);
};

function power(x, n) {
    if (n === 0) {
        return 1;
    }
    
    var v = power(x, parseInt(n/2));
    
    if (n % 2 === 0) {
        return v * v;
    }
    
    return v * v * x;
}
