/**
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:
Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].

Example 2:
Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].

This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].
*/
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    var len = intervals.length,
        result = [],
        insertIndex = 0,
        curInterval,
        i;
    
    for (i = 0; i < len; i++) {
        curInterval = intervals[i];
        
        if (curInterval.end < newInterval.start) {
            result.push(curInterval);
            insertIndex++;
        } else if (curInterval.start > newInterval.end) {
            result.push(curInterval);
        } else {
            newInterval.start = Math.min(newInterval.start, curInterval.start);
            newInterval.end = Math.max(newInterval.end, curInterval.end);
        }
    }
    
    result.splice(insertIndex, 0, newInterval);
    
    return result;
};
