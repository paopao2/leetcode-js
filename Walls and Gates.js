/**
 You are given a m x n 2D grid initialized with these three possible values.

    -1 - A wall or an obstacle.
    0 - A gate.
    INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.

Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

For example, given the 2D grid:

INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF

After running your function, the 2D grid should be:

  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4
*/

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    let queue = [];
    let rowLen = rooms.length;
    const MAX_VALUE = 2147483647;
    if (rowLen === 0) {
        return;
    }
    
    let colLen = rooms[0].length;
    
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (rooms[i][j] === 0) {
                queue.push([i, j]);
            }
        }
    }
    
    while (queue.length > 0) {
        const cur = queue.shift();
        const row = cur[0];
        const col = cur[1];
        const val = rooms[row][col];
        
        if (row + 1 < rowLen && rooms[row + 1][col] === MAX_VALUE) {
            rooms[row + 1][col] = val + 1;
            queue.push([row + 1, col])
        }
        
        if (row - 1 >= 0 && rooms[row - 1][col] === MAX_VALUE) {
            rooms[row - 1][col] = val + 1;
            queue.push([row - 1, col]);
        }
        
        if (col + 1 < colLen && rooms[row][col + 1] === MAX_VALUE) {
            rooms[row][col + 1] = val + 1;
            queue.push([row, col + 1]);
        }
        
        if (col - 1 >= 0 && rooms[row][col - 1] === MAX_VALUE) {
            rooms[row][col - 1] = val + 1;
            queue.push([row, col - 1]);
        }
    }
};
