/**
Given an array of words and a length L, format the text such that each line has exactly L characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly L characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

For example,
words: ["This", "is", "an", "example", "of", "text", "justification."]
L: 16.

Return the formatted lines as:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
Note: Each word is guaranteed not to exceed L in length.

click to show corner cases.

Corner Cases:
A line other than the last line might contain only one word. What should you do in this case?
In this case, that line should be left-justified.
*/
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    var len = words.length,
        lastIndex = -1,
        result = [],
        curLen = 0,
        wordsCount,
        spaceCount,
        extraSpace,
        totalSpace,
        word = '',
        i,
        j;
    
    if (maxWidth === 0) {
        return [""];
    }
    
    for (i = 0; i < len; i++) {
        curLen += words[i].length + 1;
        
        if (curLen - 1 > maxWidth || i === len - 1) {
            if (curLen - 1 > maxWidth && (i - lastIndex > 1)) {
                curLen -= words[i].length + 1;
                i--;
            }

            wordsCount = i - lastIndex;
            curLen -= wordsCount; // by now, curlen is length without any space
            
            if (wordsCount === 1) {
                word += words[i];
                word = appendSpace(word, maxWidth - curLen);
            } else if (i === len - 1) {
                totalSpace = maxWidth - curLen;
                
                for (j = lastIndex + 1; j <= i; j++) {
                    word += words[j];
                    
                    if (totalSpace > 0) {
                        totalSpace--;
                        word += ' ';
                    }
                }
                
                if (totalSpace > 0) {
                    word = appendSpace(word, totalSpace);
                }
            } else {
                // if n words, then n - 1 spaces
                spaceCount = parseInt((maxWidth - curLen) / (wordsCount - 1));
                extraSpace = (maxWidth - curLen) % (wordsCount - 1);
                
                for (j = lastIndex + 1; j <= i; j++) {
                    word += words[j];
                    
                    if (j !== i) {
                        word = appendSpace(word, spaceCount);
                        
                        if (extraSpace > 0) {
                            word += ' ';
                            extraSpace--;
                        }
                    }
                }
            }
            
            result.push(word);
            word = '';
            lastIndex = i;
            curLen = 0;
        }
    }
    
    return result;
};

// append k spaces at end of word
function appendSpace(word, k) {
    while (k > 0) {
        word += ' ';
        k--;
    }
    
    return word;
} 
