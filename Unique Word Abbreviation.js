/**
An abbreviation of a word follows the form <first letter><number><last letter>. Below are some examples of word abbreviations:

a) it                      --> it    (no abbreviation)

     1
b) d|o|g                   --> d1g

              1    1  1
     1---5----0----5--8
c) i|nternationalizatio|n  --> i18n

              1
     1---5----0
d) l|ocalizatio|n          --> l10n

Assume you have a dictionary and given a word, find whether its abbreviation is unique in the dictionary. A word's abbreviation is unique if no other word from the dictionary has the same abbreviation.

Example:

Given dictionary = [ "deer", "door", "cake", "card" ]

isUnique("dear") -> false
isUnique("cart") -> true
isUnique("cane") -> false
isUnique("make") -> true

*/
/**
 * @constructor
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
    this.map = new Map();
    this.getAbbr = function(str) {
        const len = str.length;
        
        if (len <= 2) {
            return str;
        }
        
        return str.charAt(0) + (len - 2) + str.charAt(len - 1);
    };
    
    dictionary.forEach(word => {
        const abbr = this.getAbbr(word);
        
        if (!this.map.has(abbr)) {
            this.map.set(abbr, word);
        } else {
            if (this.map.get(abbr) !== word) {
                this.map.set(abbr, '');
            }
        }
    });
};

/**
 * @param {string} word
 * @return {bool}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    const abbr = this.getAbbr(word);
    
    return !this.map.has(abbr) || this.map.get(abbr) === word;
};


/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var vwa = new ValidWordAbbr(dictionary);
 * vwa.isUnique("word");
 * vwa.isUnique("anotherWord");
 */
