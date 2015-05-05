/**
There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.

Note:
The solution is guaranteed to be unique.

 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var len = gas.length,
        require = 0,
        fill = 0,
        i,
        j,
        k;
        
    for(i = 0; i < len; i++) {
        for (j = i; j < len + i; j++) {
            if (j < len) {
                k = j;
            } else {
                k = j - len;
            }
            fill += gas[k];
            require += cost[k];
            if (fill < require) {
                fill = 0;
                require = 0;
                break;
            }
        }
    }

    return -1;
        
};
