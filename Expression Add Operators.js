/**
Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.

Examples: 
"123", 6 -> ["1+2+3", "1*2*3"] 
"232", 8 -> ["2*3+2", "2+3*2"]
"105", 5 -> ["1*0+5","10-5"]
"00", 0 -> ["0+0", "0-0", "0*0"]
"3456237490", 9191 -> []
*/
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    var result = [];
    
    helper(result, '', 0, num, target, 0, 0);
    
    return result;
};

function helper(result, cur, index, num, target, prev, multi) {
    if (index === num.length) {
        if (prev === target) {
            result.push(cur);
        }
        
        return;
    }
    
    var len = num.length,
        temp,
        i;
        
    for (i = index; i < len; i++) {
        if (num.charAt(index) === '0' && i > index) {
            break;
        }
        
        temp = parseInt(num.substring(index, i + 1));
        
        if (cur.length === 0) {
            helper(result, cur + temp, i + 1, num, target, temp, temp);
        } else {
            helper(result, cur + '+' + temp, i + 1, num, target, prev + temp, temp);
            helper(result, cur + '-' + temp, i + 1, num, target, prev - temp, -temp);
            helper(result, cur + '*' + temp, i + 1, num, target, prev - multi + multi * temp, temp * multi);
        }
    }
}
