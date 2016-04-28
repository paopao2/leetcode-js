/**
Given a string containing only digits, restore it by returning all possible valid IP address combinations.

For example:
Given "25525511135",

return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)
*/
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var result = [],
        len = s.length;
    
    if (len > 12) {
        return result;
    }
    
    helper(result, s, 0, [], len);
    
    return result;
};

function helper(result, s, index, curArr, len) {
    if (curArr.length === 4) {
        if (index === len) {
            result.push(curArr.join('.'));
        }
        return;
    }
    
    var i,
        num;
    
    // only 3 situations
    for (i = index; i < len && i <= index + 3; i++) {
        num = s.substring(index, i + 1);
        
        if (isValid(num)) {
            curArr.push(parseInt(num));
            helper(result, s, i + 1, curArr.concat(), len);
            curArr.pop();
        } 
        
    }
}

function isValid(s) {
    if (s.charAt(0) === '0') {
        return s === '0';
    }
    
    var num = parseInt(s);
    
    return num >= 0 && num <= 255;
}
