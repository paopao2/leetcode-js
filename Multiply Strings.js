/**
Given two numbers represented as strings, return multiplication of the numbers as a string.

Note:
The numbers can be arbitrarily large and are non-negative.
Converting the input string to integer is NOT allowed.
You should NOT use internal library such as BigInteger.
*/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var len1 = num1.length,
        len2 = num2.length,
        result = [],
        carry,
        val,
        arr1,
        arr2,
        i,
        j;
        
    for (i = 0; i < len1 + len2; i++) {
        result.push(0);
    }
    
    arr1 = num1.split('').reverse();
    arr2 = num2.split('').reverse();
    
    for (i = 0; i < len1; i++) {
        val = arr1[i] - '0';
        carry = 0;
        
        for (j = 0; j < len2; j++) {
            carry += val * (arr2[j] - '0') + result[i + j];
            result[i + j] = carry % 10;
            carry = parseInt(carry / 10);
        }
        
        if (carry !== 0) {
            result[len2 + i] = carry;
        }
    }
    
    result = result.reverse();
    
    i = 0;
    
    while (i < len1 + len2 - 1 && result[i] === 0) {
        i++;
    }
    
    return result.slice(i).join('');
};
