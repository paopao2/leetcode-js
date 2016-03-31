/**
Given a list of unique words. Find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

Example 1:
Given words = ["bat", "tab", "cat"]
Return [[0, 1], [1, 0]]
The palindromes are ["battab", "tabbat"]
Example 2:
Given words = ["abcd", "dcba", "lls", "s", "sssll"]
Return [[0, 1], [1, 0], [3, 2], [2, 4]]
The palindromes are ["dcbaabcd", "abcddcba", "slls", "llssssll"]
*/

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    var len = words.length,
        map = {},
        palindromeMap = {},
        word,
        wordLen,
        tempArr,
        result = new Set(),
        resultArr = [],
        sub1,
        sub2,
        i,
        j;
        
    for (i = 0; i < len; i++) {
        map[words[i]] = i;
        
        // if (isPalindrome(words[i])) {
        //     palindromeMap[words[i]] = i;
        // }
    }
    
    for (i = 0; i < len; i++) {
        word = words[i];
        wordLen = word.length;
        
        // if (isPalindrome(word)) {
        //     for (var key in palindromeMap) {
        //         temp = [];
                
        //         if (palindromeMap[key] !== i) {
        //             temp.push(palindromeMap[key]);
        //             temp.push(i);
        //             result.add(temp);
        //         }
        //     }
            
        //     continue;
        // }
        
        for (j = 0; j <= wordLen; j++) {
            sub1 = word.substring(0, j);
            sub2 = word.substring(j, wordLen);
            
            if (isPalindrome(sub1)) {
                sub2 = sub2.split('').reverse().join('');
                
                if (map.hasOwnProperty(sub2) && map[sub2] !== i) {
                    temp = [];
                    temp.push(map[sub2]);
                    temp.push(i);
                    result.add(temp.toString());
                }
            } 
            
            if (isPalindrome(sub2)) {
                sub1 = sub1.split('').reverse().join('');
                
                if (map.hasOwnProperty(sub1) && map[sub1] !== i) {
                    temp = [];
                    temp.push(i);
                    temp.push(map[sub1]);
                    result.add(temp.toString());
                }
            }
        }
    }
    
    result.forEach(function(item) {
        temp = item.split(',');
        temp[0] = (parseInt(temp[0]));
        temp[1] = (parseInt(temp[1]));
        resultArr.push(temp);
    });
    
    return resultArr;
};

function isPalindrome(s) {
    var start = 0,
        end = s.length - 1;
    
    while (start < end) {
        if (s.charAt(start) !== s.charAt(end)) {
            return false;
        }
        
        start++;
        end--;
    }
    
    return true;
}
