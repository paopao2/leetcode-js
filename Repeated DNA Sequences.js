/**
All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

For example,

Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",

Return:
["AAAAACCCCC", "CCCCCAAAAA"].
*/
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    var map = new Set(),
        len = s.length,
        result = new Set(),
        code,
        substr,
        i;

    for (i = 9; i < len; i++) {
        substr = s.substr(i - 9, 10);
        code = encode(substr);

        if (map.has(code)) {
            result.add(substr);
        } else {
            map.add(code);
        }
    }

    return Array.from(result);
};

function encode(s) {
    var sum = 0,
        len = s.length,
        c,
        i;

    for (i = 0; i < len; i++) {
        c = s.charAt(i);
        switch (c) {
            case 'A':
                sum = sum * 4;
                break;
            case 'C':
                sum = sum * 4 + 1;
                break;
            case 'G':
                sum = sum * 4 + 2;
                break;
            case 'T':
                sum = sum * 4 + 3;
                break;
        }
    }

    return sum;
} 
