/**
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example, 
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!


*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var len = height.length,
        leftMax = [],
        rightMax = [],
        max,
        sum = 0,
        i;
    
    leftMax[0] = 0;
    rightMax[len - 1] = 0;
    
    for (i = 1; i < len; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
    }
    
    for (i = len - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i + 1]);
    }
    
    for (i = 1; i < len - 1; i++) {
        max = Math.min(leftMax[i], rightMax[i]);
        
        if (max - height[i] > 0) {
            sum += max - height[i];
        }
    }
    
    return sum;
};
