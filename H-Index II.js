/**
Follow up for H-Index: What if the citations array is sorted in ascending order? Could you optimize your algorithm?

Hint:

Expected runtime complexity is in O(log n) and the input is sorted.
*/
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var len = citations.length,
        start = 0,
        end = len - 1,
        mid;
    
    while (start <= end) {
        mid = parseInt((start + end) / 2);
        
        if (citations[mid] === len - mid) {
            return len - mid;
        }
        
        if (citations[mid] > len - mid) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    return len - start;
};
