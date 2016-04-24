/**
The set [1,2,3,…,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order,
We get the following sequence (ie, for n = 3):

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note: Given n will be between 1 and 9 inclusive.
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    var arr = [],
        num = [],
        result = '',
        i;
    
    for (i = 1; i <= n; i++) {
        arr.push(i);
        num.push(0);
    }
    
    k = k - 1; // there're k - 1 permutations before
    i = 0;
    
    if (k === 0) {
        return arr.join('');
    }
    
    while(k > 0) {
        num[i] = parseInt(k / getFactorial(n - 1));
        k = k % getFactorial(n - 1);
        n--;
        i++;
    }
    
    for (i = 0; i < num.length; i++) {
        result += arr[num[i]];
        arr.splice(num[i], 1);
    }
    
    return result;
};

function getFactorial(n) {
    var result = 1;
    
    if (n === 0) {
        return 0;
    }
    
    while (n > 1) {
        result *= n;
        n--;
    }
    
    return result;
}
