/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var result = [];
    
    genPartition(s, result, 0, []);
    
    return result;
};

function genPartition(s, result, index, curArr) {
    if (index === s.length) {
        result.push(curArr);
        return;
    }
    
    var len = s.length,
        j;
        
    for (j = index + 1; j <= len; j++) {
        if (isPalindrome(s.substring(index, j))) {
            curArr.push(s.substring(index, j));
            genPartition(s, result, j, curArr.concat());
            curArr.pop();
        }
    }
}

function isPalindrome(a) {
    var len = a.length,
        i = 0,
        j = len - 1;
    
    if (len === 0 || len === 1) {
        return true;
    }
    
    while(i < j) {
        if (a.charAt(i) !== a.charAt(j)) {
            return false;
        }
        i++;
        j--;
    }
    
    return true;
}


// optimize with dp
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var result = [],
        isPal = [],
        len = s.length,
        i,
        j;
        
    for (i = 0; i < len; i++) {
        isPal.push(new Array(len));
    }
    
    // i can also start from len - 1, then i--
    for (i = 0; i < len; i++) {
        for (j = i; j >= 0; j--) {
            if ((s.charAt(i) === s.charAt(j)) && (i - j < 2 || isPal[j + 1][i - 1])) {
                isPal[j][i] = true;
            }
        }
    }
    
    genPartition(s, result, 0, [], isPal);
    
    return result;
};

function genPartition(s, result, index, curArr, isPal) {
    if (index === s.length) {
        result.push(curArr);
        return;
    }
    
    var len = s.length,
        j;
        
    for (j = index; j < len; j++) {
        if (isPal[index][j]) {
            curArr.push(s.substring(index, j + 1));
            genPartition(s, result, j + 1, curArr.concat(), isPal);
            curArr.pop();
        }
    }
}
