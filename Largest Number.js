/**
Given a list of non negative integers, arrange them such that they form the largest number.

For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

Note: The result may be very large, so you need to return a string instead of an integer.

 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    var i,
        len = nums.length,
        result = '',
        startWithZero = true;
    nums.sort(function(a, b){
        var x = a + '' + b,
            y = b + '' + a;
        return parseInt(y) - parseInt(x);
    });
    for (i = 0; i < len; i++) {
        if (startWithZero && nums[i] !== 0) {
            startWithZero = false;
        }
        result += nums[i];
    }
    if (startWithZero) {
        return '0';
    }
    return result;
};
