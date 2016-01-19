/**
Compare two version numbers version1 and version2.
If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.

You may assume that the version strings are non-empty and contain only digits and the . character.
The . character does not represent a decimal point and is used to separate number sequences.
For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

Here is an example of version numbers ordering:

0.1 < 1.1 < 1.2 < 13.37
Credits:
Special thanks to @ts for adding this problem and creating all test cases.

*/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var arr1 = version1.split('.'),
        arr2 = version2.split('.'),
        len1 = arr1.length,
        len2 = arr2.length,
        a,
        b,
        i,
        j;
        
    for (i = 0; (i < len1) && (i < len2) ; i++) {
        a = parseInt(arr1[i]);
        b = parseInt(arr2[i]);
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
    }
    
    if (len1 > len2) {
        for (j = i; j < len1; j++) {
            if (parseInt(arr1[j]) > 0) {
                return 1;
            }
        }
    } else if (len1 < len2) {
        for (j = i; j < len2; j++) {
            if (parseInt(arr2[j]) > 0) {
                return -1;
            }
        }
    }
    
    return 0;
};
