/**
Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].
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
 * @return {Interval[]}
 */
var merge = function(intervals) {
    var len = intervals.length,
        start = null,
        end,
        result = [],
        cur,
        i;
    
    if (len <= 1) {
        return intervals;
    }
    
    intervals.sort(function(a, b) {
        if (a.start < b.start) {
            return - 1;
        } else if (a.start > b.start) {
            return 1;
        } else {
            return a.end - b.end;
        }
    });
    
    for (i = 0; i < len; i++) {
        cur = intervals[i];
        
        if (i === 0) {
            start = cur.start;
            end = cur.end;
        } else {
            if (cur.start <= end) {
                end = Math.max(end, cur.end);
            } else {
                result.push(new Interval(start, end));
                start = cur.start;
                end = cur.end;
            }
        }
    }
    
    if (start !== null) {
        result.push(new Interval(start, end));
    }
    
    return result;
};
