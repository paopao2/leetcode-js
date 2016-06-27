/**
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return 2. 
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
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let start = [];
    let end = [];
    let len = intervals.length;
    
    for (let i = 0; i < len; i++) {
        start[i] = intervals[i].start;
        end[i] = intervals[i].end;
    }
    
    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);
    
    let rooms = 0;
    let endIndex = 0;
    
    for (let i = 0; i < len; i++) {
        if (start[i] < end[endIndex]) {
            rooms++;
        } else {
            endIndex++;
        }
    }
    
    return rooms;
};
