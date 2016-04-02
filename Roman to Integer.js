/**
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {string} s
 * @return {number}
 */

/**
找下subtractive notation的规律，以简单的例子s = IX 说明。
1. 如果按照additive性质的话应该ret = 1+10 = 11。但因为num(X)=10>num(I)=1，ret = 10 - 1。
2. 将subtractive rule转换成等效的additive rule：ret = 1 + (10 - 2*1)

建立一个罗马字符对应整数的hash table ht。
当ht[s[i]] > ht[s[i-1]]，即为subtractive nontation：ret += (ht[s[i]] - 2*ht[s[i-1]])
否则为additive nontation：ret+=ht[s[i]]
*/
var romanToInt = function(s) {
    var len = s.length,
        map = {},
        result = 0,
        i;
    
    if (len === 0) {
        return 0;
    }
    
    map['I'] = 1;
    map['V'] = 5;
    map['X'] = 10;
    map['L'] = 50;
    map['C'] = 100;
    map['D'] = 500;
    map['M'] = 1000;
    
    for (i = 0; i < len; i++) {
        result += map[s.charAt(i)];
        
        if (i > 0 && map[s.charAt(i)] > map[s.charAt(i - 1)]) {
            result -= 2 * map[s.charAt(i - 1)];
        }
    }
    
    return result;
};
