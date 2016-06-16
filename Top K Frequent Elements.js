/**
Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note: 
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 *  Build a array of list to be buckets with length 1 to sort.
 */
var topKFrequent = function(nums, k) {
    let len = nums.length;
    const bucket = {};
    const freqs = [];
    let result = [];
    
    nums.forEach((num) => {
        if (bucket[num] === undefined) {
            bucket[num] = 1;
        } else {
            bucket[num]++;
        }
    });
    
    Object.keys(bucket).forEach((num) => {
        const freq = bucket[num];
        num = parseInt(num);
        
        if (freqs[freq] === undefined) {
            freqs[freq] = [num];
        } else {
            freqs[freq].push(num);
        }
    });
    
    let j = 0;
    for (let i = freqs.length; i >= 0; i--) {
        if (freqs[i] !== undefined) {
            len = freqs[i].length;
            
            for (let m = 0; m < len; m++) {
                if (j === k) {
                    break;
                }
                
                result.push(freqs[i][m]);
                j++;
            }
            
            if (j === k) {
                break;
            }
        }
    }
    
    return result;
};
