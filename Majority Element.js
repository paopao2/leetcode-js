/**
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 * 
 * @param {number[]} num
 * @return {number}
 */
var majorityElement = function(num) {
    var i,
        length = num.length,
        max,
        list = {};
    if (length === 1) {
        return num[0];
    }
    for (i = 0; i < length; i++) {
        if (list[num[i]]) {
            max = ++list[num[i]];
            if (i > length/2 - 1 && max >= length/2) {
                return num[i];
            }
        } else {
            list[num[i]] = 1;
        }
    }
    
};
