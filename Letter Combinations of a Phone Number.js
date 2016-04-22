/**
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.



Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var len = digits.length,
        result = [],
        map = {
            '1': [''],
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z']
        };
        
    if (len === 0) {
        return result;
    }
    
    return genStrings([''], 0, len, digits, map);
};

function genStrings(curArr, index, len, digits, map) {
    var length = curArr.length,
        next = [],
        temp,
        i,
        j;
    
    if (index === len) {
        return curArr;
    }
    
    for (i = 0; i < length; i++) {
        for (j = 0; j < map[digits.charAt(index)].length; j++) {
            temp = curArr[i] + map[digits.charAt(index)][j];
            next.push(temp);
        }
    }    
    
    return genStrings(next, index + 1, len, digits, map);
}
