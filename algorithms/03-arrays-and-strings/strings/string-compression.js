/*
Problem: String Compression

Given a string s, your task is to write a function that performs basic string compression. The compression involves replacing consecutive repeated characters with the character followed by the count of repetitions. Return the compressed string. But if the compressed string is not shorter than the original string, return the original string.

Example:
    Input: "aabcccccaaa"
    Output: "a2b1c5a3"

    Input: "abcde"
    Output: "abcde"

Constraints:

    The length of the input string s is at most 1000 characters.
*/

const compressString = (s) => {
    let n = s.length;
    let compressedStr = ''
    let count = 1;

    for (let i = 0; i < n; i++) {
        if (i < n - 1 && s[i] === s[i + 1]) {
            count++
        } else {
            compressedStr += s[i] + count;
            count = 1;
        }
    }

    return compressedStr.length < n ? compressedStr : s;
}

let str = "aabcccccaaa";
console.log(compressString(str));

str = "abccc";
console.log(compressString(str));