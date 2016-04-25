/**
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:
If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
Example 1:
tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Return ["JFK", "MUC", "LHR", "SFO", "SJC"].
Example 2:
tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Return ["JFK","ATL","JFK","SFO","ATL","SFO"].
Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"]. But it is larger in lexical order.
*/
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    tickets.sort(function(a, b) {
       if (a[0] < b[0]) {
           return -1;
       } else if (a[0] > b[0]) {
           return 1;
       } else {
           if (a[1] < b[1]) {
               return -1;
           }
           
           return 1;
       }
    });
    
    var map = {},
        len = tickets.length,
        result = [],
        i;
        
    for (i = 0; i < len; i++) {
        if (map[tickets[i][0]] === undefined) {
            map[tickets[i][0]] = {};
            map[tickets[i][0]][tickets[i][1]] = 1;
        } else {
            if (map[tickets[i][0]][tickets[i][1]] === undefined) {
                map[tickets[i][0]][tickets[i][1]] = 1;
            } else {
                map[tickets[i][0]][tickets[i][1]]++;
            }
        }
    }
    
    result.push('JFK');
    
    dfs(result, 0, len, map);
    
    return result;
};

function dfs(result, index, len, map) {
    if (index === len) {
        return true;
    }
    
    var cur = result[index],
        dests = map[cur],
        count,
        i;
        
    for (var dest in dests) {
        count = dests[dest];
        
        if (count > 0) {
            dests[dest]--;
            result.push(dest);
            if (dfs(result, index + 1, len, map)) {
                return true;
            }
            dests[dest]++;
            result.pop();
        }
    }
    
    return false;
}

// SOLUTION 2: GREEDY https://leetcode.com/discuss/87314/non-recursive-time-space-solution-with-detail-explanations
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    tickets.sort(function(a, b) {
       if (a[0] < b[0]) {
           return -1;
       } else if (a[0] > b[0]) {
           return 1;
       } else {
           if (a[1] < b[1]) {
               return -1;
           }
           
           return 1;
       }
    });
    
    var map = {},
        len = tickets.length,
        result = [],
        i;
        
    for (i = 0; i < len; i++) {
        if (map[tickets[i][0]] === undefined) {
            map[tickets[i][0]] = [tickets[i][1]];
        } else {
            map[tickets[i][0]].push(tickets[i][1]);
        }
    }
    
    dfs('JFK', result, map);
    
    return result;
};

function dfs(cur, result, map) {
    var arr = map[cur];
    
    while (arr && arr.length > 0) {
        dfs(arr.shift(), result, map);
    }
    
    result.unshift(cur);
}
