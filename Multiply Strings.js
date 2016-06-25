/**
Given two numbers represented as strings, return multiplication of the numbers as a string.

Note:
The numbers can be arbitrarily large and are non-negative.
Converting the input string to integer is NOT allowed.
You should NOT use internal library such as BigInteger.
*/

// BETTER SOLUTION
//  `num1[i] * num2[j]` will be placed at indices `[i + j`, `i + j + 1]` 
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;
    let result = new Array(len1 + len2).fill(0);
    
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            let value = parseInt(num1.charAt(i)) * parseInt(num2.charAt(j));
            result[i + j + 1] += value;
            
            if (result[i + j + 1] >= 10) {
                result[i + j] += parseInt(result[i + j + 1] / 10);
                result[i + j + 1] = result[i + j + 1] % 10;
            }
        }
    }
    
    let string = '';
    
    for (let i = 0; i < result.length; i++) {
        if (string === '' && result[i] === 0) {
            continue;
        }
        
        string += result[i];
    }
    
    return string === '' ? '0' : string;
};

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
