/**
Given an array of strings, return all groups of strings that are anagrams.

Note: All inputs will be in lower-case.
*/

/**
 * @param {string[]} strs
 * @return {string[]}
 */
var anagrams = function(strs) {
    var map = {},
        len = strs.length,
        curStr,
        newArr,
        sortedArr,
        sortedStr,
        result = [],
        i;
    
    for (i = 0; i < len; i++) {
        curStr = strs[i];
        sortedArr = curStr.split('');
        sortedStr = sortedArr.sort().join('');
        
        if (map.hasOwnProperty(sortedStr)) {
            map[sortedStr].push(curStr);
        } else {
            newArr = [];
            newArr.push(curStr);
            map[sortedStr] = newArr; 
        }
    }
    
    len = map.length;
    
    for (var key in map) {
        if (map[key].length > 1) {
            result = result.concat(map[key]);
        }
    }
    
    return result;
};
