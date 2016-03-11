/**
Given two arrays of length m and n with digits 0-9 representing two numbers. Create the maximum number of length k <= m + n from digits of the two. The relative order of the digits from the same array must be preserved. Return an array of the k digits. You should try to optimize your time and space complexity.

Example 1:
nums1 = [3, 4, 6, 5]
nums2 = [9, 1, 2, 5, 8, 3]
k = 5
return [9, 8, 6, 5, 3]

Example 2:
nums1 = [6, 7]
nums2 = [6, 0, 4]
k = 5
return [6, 7, 6, 0, 4]

Example 3:
nums1 = [3, 9]
nums2 = [8, 9]
k = 3
return [9, 8, 9]
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
    var len1 = nums1.length,
        len2 = nums2.length,
        arr1,
        arr2,
        arr,
        result,
        i;
    
    for (i = Math.max(0, k - len2); i <= k && i <= len1; i++) {
        arr1 = getMaxSubArr(nums1, i);
        arr2 = getMaxSubArr(nums2, k - i);
        arr = merge(arr1, arr2);
        
        if (!result) {
            result = arr;
        } else {
            result = getGreaterArr(result, arr);
        }
    }
    
    return result;
};

// return max sub array of size m
function getMaxSubArr(arr, m) {
    var result = [],
        len = arr.length,
        i,
        j = 0; // top of the stack
    
    for (i = 0; i < len; i++) {
        while (j > 0 && (m - j < len - i) && (result[j - 1] < arr[i])) { //can pop item out of stack
            j--;
        }
        
        if (j < m) {
            result[j] = arr[i];
            j++;
        }
    }
    
    return result;
}

//TODO: Integrate getGreaterArr into isGreater function
function getGreaterArr(a, b) {
    var len = a.length,
        i = 0;
        
    while (i < len) {
        if (a[i] < b[i]) {
            return b;
        } else if (a[i] > b[i]) {
            return a;
        }
        
        i++;
    }
    
    return a;
}

function isGreater(a, i, b, j) {
    var len1 = a.length,
        len2 = b.length;
    
    while(i < len1 && j < len2 && a[i] === b[j]) {
        i++;
        j++;
    }
    
    if (i === len1) {
        return false;
    }
    
    if (j === len2) {
        return true;
    }
    
    return a[i] > b[j];
}

function merge(a, b) {
    var len1 = a.length,
        len2 = b.length,
        i = 0,
        j = 0,
        result = [];
        
    while(i < len1 && j < len2) {
        if (isGreater(a, i, b, j)) {
            result.push(a[i]);
            i++;
        } else {
            result.push(b[j]);
            j++;
        }
    }
    
    while (i < len1) {
        result.push(a[i++]);
    }
    
    while (j < len2) {
        result.push(b[j++]);
    }
    
    return result;
}
