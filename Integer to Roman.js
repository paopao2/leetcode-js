/**
Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.
*/
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var dict = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"],
        val = [1000,900,500,400,100,90,50,40,10,9,5,4,1],
        len = 13,
        result = '',
        count,
        i;
        
    for (i = 0; i < len; i++) {
        if (num >= val[i]) {
            count = Math.floor(num / val[i]);
            
            while (count > 0) {
                result += dict[i];
                count--;
            }
            
            num %= val[i];
        } 
    }
    
    return result;
};
