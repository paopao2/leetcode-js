/**
Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var lenA = a.length,
        lenB = b.length,
        overFlow = 0,
        charA,
        charB,
        result = '',
        curVal,
        i,
        j;

    for (i = lenA - 1, j = lenB - 1; i >= 0 && j >= 0; i--, j --) {
        charA = parseInt(a.charAt(i));
        charB = parseInt(b.charAt(j));

        curVal = charA + charB + overFlow;

        if (curVal > 1) {
            curVal = curVal - 2;
            overFlow = 1;
        } else {
            overFlow = 0;
        }
        
        result = curVal + result;
    }

    while (i >= 0) {
        charA = parseInt(a.charAt(i));
        curVal = charA + overFlow;

        if (curVal > 1) {
            curVal = curVal - 2;
            overFlow = 1;
        } else {
            overFlow = 0;
        }
        result = curVal + result;

        i--;
    }

    while (j >= 0) {
        charB = parseInt(b.charAt(j));
        curVal = charB + overFlow;

        if (curVal > 1) {
            curVal = curVal - 2;
            overFlow = 1;
        } else {
            overFlow = 0;
        }
        
        result = curVal + result;

        j--;
    }

    if (overFlow === 1) {
        result = '1' + result;
    }
    
    return result;
};
