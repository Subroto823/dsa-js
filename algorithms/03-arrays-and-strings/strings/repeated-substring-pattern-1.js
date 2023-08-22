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
    # Naive approach
*/

function repeatedSubstringPattern(s) {
    let n = s.length

    if (n === 1) return false

    for (let i = 1; i < n; i++) {
        if ((n % i) === 0) {
            j = Math.floor(n / i)

            if (s === s.substring(0, i).repeat(j)) return true
        }
    }
        
    return false
}

let s = "abab"
console.log(repeatedSubstringPattern(s));
s = "aba"
console.log(repeatedSubstringPattern(s));