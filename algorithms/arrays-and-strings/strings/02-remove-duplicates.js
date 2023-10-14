/*
Problem: Remove duplicates

You are given a string containing various characters. Your task is to remove all duplicate characters from the string, so that each character appears only once in the resulting string. The order of the characters should be maintained.

Write a function remove_duplicates that takes a single string as input and returns a new string with duplicate characters removed.

Example:
    Input: "programming"
    Output: "progamin"
*/

var removeDuplicates = function (s) {
    let unique = new Set();
    let uniqueString = ''

    for (let c of s) {
        if (unique.has(c)) continue;
        uniqueString += c;
        unique.add(c);
    }
    
    return uniqueString;
}

let s = "programming";
console.log(removeDuplicates(s));