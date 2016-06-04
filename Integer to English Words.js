/**
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

For example,
123 -> "One Hundred Twenty Three"
12345 -> "Twelve Thousand Three Hundred Forty Five"
1234567 -> "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
Hint:

Did you see a pattern in dividing the number into chunk of words? For example, 123 and 123000.
Group the number by thousands (3 digits). You can write a helper function that takes a number less than 1000 and convert just that chunk to words.
There are many edge cases. What are some good test cases? Does your code work with input such as 0? Or 1000010? (middle chunk is zero and should not be printed out)
*/
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    const belowTen = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const belowTwenty = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const belowHundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
    function toWordsHelper(num) {
        let str;
        
        if (num < 10) {
            str = belowTen[num] + ' ';
        } else if (num < 20) {
            str = belowTwenty[num - 10] + ' ';
        } else if (num < 100) {
            str = belowHundred[parseInt(num / 10) - 2] + ' ' + toWordsHelper(num % 10);
        } else if (num < 1000) {
            str = belowTen[parseInt(num / 100)] + ' Hundred ' + toWordsHelper(num % 100);
        } else if (num < 1000000) {
            str = toWordsHelper(parseInt(num / 1000)) + ' Thousand ' + toWordsHelper(num % 1000);
        } else if (num < 1000000000) {
            str = toWordsHelper(parseInt(num / 1000000)) + ' Million ' + toWordsHelper(num % 1000000);
        } else {
            str = toWordsHelper(parseInt(num / 1000000000)) + ' Billion ' + toWordsHelper(num % 1000000000);
        }
        
        return str.trim();
    }
    
    let result = toWordsHelper(num);
    
    if (result === '') {
        return 'Zero';
    }
    
    return result;
};
