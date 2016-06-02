/**
There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).


*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var len1 = nums1.length,
        len2 = nums2.length,
        len = len1 + len2;
        
    if (len % 2 === 1) {
        return findMedianHelper(0, nums1, 0, nums2, (len + 1) / 2);
    } else {
        return (findMedianHelper(0, nums1, 0, nums2, len / 2) + findMedianHelper(0, nums1, 0, nums2, len / 2 + 1)) / 2;
    }
};

function findMedianHelper(aStart, numsA, bStart, numsB, k) {
    if (aStart >= numsA.length) {
        return numsB[bStart + k - 1];
    }
    
    if (bStart >= numsB.length) {
        return numsA[aStart + k - 1];
    }
    
    if (k === 1) {
        return Math.min(numsA[aStart], numsB[bStart]);
    }
    
    var aKey = aStart + parseInt(k / 2) - 1 < numsA.length? numsA[aStart + parseInt(k / 2) - 1] : Number.MAX_VALUE,
        bKey = bStart + parseInt(k / 2) - 1 < numsB.length? numsB[bStart + parseInt(k / 2) - 1] : Number.MAX_VALUE;
        
    if (aKey < bKey) {
        return findMedianHelper(aStart + parseInt(k / 2), numsA, bStart, numsB, k - parseInt(k / 2));
    }
    
    return findMedianHelper(aStart, numsA, bStart + parseInt(k / 2), numsB, k - parseInt(k / 2));
}
