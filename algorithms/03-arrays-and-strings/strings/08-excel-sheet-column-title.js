/*
Problem: Excel Sheet Column Title

Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For Example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 

Example: 
    Input: columnNumber = 1
    Output: "A"

    Input: columnNumber = 28
    Output: "AB"

    Input: columnNumber = 701
    Output: "ZY"


Constraints:

    1 <= columnNumber <= 231 - 1
*/

var convertToTitle = function(columnNumber) {
    let title = '';

    while(columnNumber > 0) {
        let charcode = (--columnNumber % 26) + 'A'.charCodeAt(0);
        title = String.fromCharCode(charcode) + title;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return title;
};

let columnNumber = 1;
console.log(convertToTitle(columnNumber));

columnNumber = 28;
console.log(convertToTitle(columnNumber));

columnNumber = 701;
console.log(convertToTitle(columnNumber));