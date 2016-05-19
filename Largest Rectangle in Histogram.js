/**
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.


Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].


The largest rectangle is shown in the shaded area, which has area = 10 unit.

For example,
Given heights = [2,1,5,6,2,3],
return 10.
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var len = heights.length,
        stack = [],
        max = 0,
        cur,
        i;
    
    if (len === 0) {
        return 0;
    }
    
    heights[len] = 0;
    len++;
    
    for (i = 0; i < len;) {
        if (stack.length > 0 && heights[i] <= heights[stack[stack.length - 1]]) {
            cur = stack.pop();
            // 如果栈已经为空，说明到目前为止所有元素（当前下标元素除外）都比出栈元素高度要大（否则栈中肯定还有元素），所以矩阵面积就是高度乘以当前下标i。
            // 如果栈不为空，那么就是从当前栈顶元素的下一个到当前下标的元素之前都比出栈元素高度大（因为栈顶元素第一个比当前出栈元素小的）。
            max = Math.max(max, heights[cur] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1));
            continue;
        }
        
        stack.push(i);
        i++;
    }
    
    return max;
};
