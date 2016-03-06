/**
Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:
All numbers (including target) will be positive integers.
Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).
The solution set must not contain duplicate combinations.
For example, given candidate set 2,3,6,7 and target 7, 
A solution set is: 
[7] 
[2, 2, 3] 
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var sols = [],
        len = candidates.length,
        curSol = [],
        start = 0,
        i;
    
    if (len === 0) {
        return sols;
    }
    // sort candidates
    candidates.sort(function(a, b) {
        if (a < b) {
            return -1;
        }
        
        return 1;
    });

    fillCurSol(start, len, candidates, target, curSol, sols); 
    
    return sols;  
};

function fillCurSol(start, len, candidates, target, curSol, sols) {
    // skip duplicates from candidate
    var i,
        newCurSol; // very important, can't mess up with arrays
    
    
    if (target === 0) {
        sols.push(curSol.concat());
        return;
    }
    
    for (i = start; i < len; i++) {
        if (i > start && candidates[i] === candidates[i - 1]) {
            continue;
        }
        
        newCurSol = curSol.concat();
        
        if (candidates[i] <= target) {
            newCurSol.push(candidates[i]);
            fillCurSol(i, len, candidates, target - candidates[i], newCurSol, sols);
            newCurSol.pop();
        }
    }
}
