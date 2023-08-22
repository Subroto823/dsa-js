/*
Palindrome Check

You are given a string as input. Your task is to write a function that determines whether the input string is a palindrome or not.

Example:
    Input: "racecar"
    Output: true
    
    Input: "hello"
    Output: false

Constraints:
    The length of the input string is at most 10^5 characters.

Note:
    Palindromes are strings that read the same forwards and backwards.
    Ignore capitalization and non-alphanumeric characters when determining palindromes.
*/

function isPalindrome(s) {
    let start = 0, end = s.length - 1;

    while (start < end) {
        if(s[start++].toLowerCase() !== s[end--].toLowerCase()) {
            return false;
        }
    }

    return true;
}

let s = "racecar";
console.log(isPalindrome(s));

s = "hello";
console.log(isPalindrome(s));