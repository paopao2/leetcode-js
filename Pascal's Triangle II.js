/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var result = [],
        parent = [],
        curRow,
        i;
    
    if (rowIndex < 0) {
        return result;
    }
    
    curRow = 0;
    parent.push(1);
    result.push(1);
    
    while (curRow < rowIndex) {
        curRow++;
        result = [];
        result.push(1);
        for (i = 1; i < curRow; i++) {
            result[i] = parent[i] + parent[i - 1];
        }
        
        result.push(1);
        parent = result.concat();
    }
    
    return result;
};

// in place solution
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var result = [],
        curRow,
        i;
    
    if (rowIndex < 0) {
        return result;
    }
    
    curRow = 0;
    result.push(1);
    
    while (curRow < rowIndex) {
        curRow++;
        
        for (i = curRow - 1; i > 0; i--) {
            result[i] = result[i] + result[i - 1];
        }
        
        result.push(1);
    }
    
    return result;
};
