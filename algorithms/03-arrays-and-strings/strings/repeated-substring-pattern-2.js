/*
Problem Statement: Repeated Substring Pattern

Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

Example:

    Input: s = "abab"
    Output: true
    Explanation: It is the substring "ab" twice.

    Input: s = "aba"
    Output: false


# Solution
    # Using string rotation or concatenation approach
*/

function repeatedSubstringPattern(s) {
    let ss = s + s;
    return ss.slice(1,  ss.length - 1).includes(s);
}

let s = "abab"
console.log(repeatedSubstringPattern(s));
s = "aba"
console.log(repeatedSubstringPattern(s));