/**
Find the total area covered by two rectilinear rectangles in a 2D plane.

Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

Rectangle Area
Assume that the total area is never beyond the maximum possible value of int.
*/

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    // S(M ∪ N) = S(M) + S(N) - S(M ∩ N)
    var M = (D - B) * (C - A),
        N = (H - F) * (G - E);
    
    return M + N - Math.max(Math.min(D, H) - Math.max(B, F), 0) * Math.max(Math.min(C, G) - Math.max(A, E), 0);
};
