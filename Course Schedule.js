/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var constructGraph = function(numNodes, pre) {
    var nodes = [];
    for (var i = 0; i < numNodes; i++) {
        var node = {};
        node.neighbors = [];
        nodes[i] = node;
    }
    for (var j = 0; j < pre.length; j++) {
        var s = pre[j][1];
        var d = pre[j][0];
        nodes[s].neighbors.push(nodes[d]);
    }
    return nodes;
}

// Return true if there is a cycle detected.
var dfs = function(startNode, parents) {
    if (parents.indexOf(startNode) >= 0) return true;
    if (startNode.visited) return false;
    
    startNode.visited = true;
    var neighbors = startNode.neighbors;
    parents.push(startNode);
    for (var i = 0; i < neighbors.length; i++) {
        var hasCycle = dfs(neighbors[i], parents);
        if (hasCycle) return true;
    }
    parents.pop();
}

var canFinish = function(numCourses, prerequisites) {
    var nodes = constructGraph(numCourses, prerequisites);
    for (var i = 0; i < nodes.length; i++) {
        var hasCycle = dfs(nodes[i], []);
        if (hasCycle) return false;
    }
    return true;
};



// SOLUTION 2
/**
There are a total of n courses you have to take, labeled from 0 to n - 1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

For example:

2, [[1,0]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

2, [[1,0],[0,1]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

Note:
The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.

click to show more hints.

Hints:
This problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.
Topological Sort via DFS - A great video tutorial (21 minutes) on Coursera explaining the basic concepts of Topological Sort.
Topological sort could also be done via BFS.
*/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var courses = [],
        prereqCounts = [],
        temp,
        setIter,
        i,
        j,
        k;
        
    for (i = 0; i < numCourses; i++) {
        courses.push(new Set());
    }
    
    // [1] is [0]'s prerequisite 
    for (i = 0; i < prerequisites.length; i++) {
        courses[prerequisites[i][1]].add(prerequisites[i][0]);
    }
    
    for (i = 0; i < numCourses; i++) {
        prereqCounts[i] = 0;
    }
    
    // count the pre-courses
    for (i = 0; i < numCourses; i++) {
        temp = Array.from(courses[i]);
        // setIter = temp[Symbol.iterator]();
        
        // while(setIter.hasNext()) {
        //     prereqCounts[setIter.next()]++;
        // }
        for (j = 0; j < temp.length; j++) {
            prereqCounts[temp[j]]++;
        }
    }
    
    // remove a non-pre course each time
    for (i = 0; i < numCourses; i++) {
        for (j = 0; j < numCourses; j++) {
            if (prereqCounts[j] === 0) {
                break;
            }
        }
        
        // if didn't find a non-pre course
        if (j === numCourses) {
            return false;
        }
        prereqCounts[j] = -1;
        // decrease courses that post the course
        temp = Array.from(courses[j]);
        // setIter = temp[Symbol.iterator]();
        
        // while(setIter.hasNext()) {
        //     prereqCounts[setIter.next()]--;
        // }
        
        for (k = 0; k < temp.length; k++) {
            prereqCounts[temp[k]]--;
        }
    }
    
    return true;
};