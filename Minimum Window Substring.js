/**
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

For example,
S = "ADOBECODEBANC"
T = "ABC"
Minimum window is "BANC".

Note:
If there is no such window in S that covers all characters in T, return the empty string "".

If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.
*/

/**
可以利用两个指针扫描（两个指针分别为start，i），以S = “e b a d b a c c b”（忽略空格），T = “abc”为例：

                                                                            0 1 2 3 4 5 6 7 8

初始化 start = i = 0
i 逐渐往后扫描S直到窗口S[start…i]包含所有T的字符，此时i = 6（字符c的位置）
缩减窗口：此时我们注意到窗口并不是最小的，需要调整 start 来缩减窗口。缩减规则为：如果S[start]不在T中 或者 S[start]在T中但是删除后窗口依然可以包含T中的所有字符，那么start = start+1， 直到不满足上述两个缩减规则。缩减后i即为窗口的起始位置，此例中从e开始窗口中要依次删掉e、b、a、d，start最后等于4 ，那么得到一个窗口大小为6-4+1 = 3
start = start+1(此时窗口肯定不会包含所有的T中的字符)，跳转到步骤2继续寻找下一个窗口。本例中还以找到一个窗口start = 5，i = 8，比上个窗口大，因此最终的最小窗口是S[4…6]
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var tSet = {},
        tFoundSet = {},
        hasFound = 0,
        lenS = s.length,
        lenT = t.length,
        winStart = -1,
        winEnd = lenS,
        result,
        start,
        c,
        i,
        j;
        
    for (i = 0; i < lenT; i++) {
        tFoundSet[t.charAt(i)] = 0;
        tSet[t.charAt(i)] = tSet[t.charAt(i)]? tSet[t.charAt(i)] + 1 : 1;
    }

    for (i = 0, start = 0; i < lenS; i++) {
        c = s.charAt(i);
        if (tSet.hasOwnProperty(c)) {
            if (tFoundSet[c] < tSet[c]) {
                hasFound++;
            }
            
            tFoundSet[s.charAt(i)]++;
        }
        
        if (hasFound === lenT) {
            while (!tSet[s.charAt(start)] || tFoundSet[s.charAt(start)] > tSet[s.charAt(start)]) {
                if (tFoundSet[s.charAt(start)]) {
                    tFoundSet[s.charAt(start)]--;
                }
                start++;
            }
            
            if (winEnd - winStart > i - start) {
                winStart = start;
                winEnd = i;
            }
            
            tFoundSet[s.charAt(start)]--;
            start++;
            hasFound--;
        }
    }
    
    return winStart !== -1? s.substr(winStart, winEnd - winStart + 1) : '';
};
