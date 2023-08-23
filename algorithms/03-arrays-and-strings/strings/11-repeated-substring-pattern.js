/*
Problem Statement: Repeated Substring Pattern

Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

Example:

    Input: s = "abab"
    Output: true
    Explanation: It is the substring "ab" twice.

    Input: s = "aba"
    Output: false
*/

/*
# Naive approach 
    * Time Complexity: O(n^2)
    * Space Complexity: O(n) */
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



/*
# Using string rotation or concatenation approach
*/

function repeatedSubstringPattern(s) {
    let ss = s + s;
    return ss.slice(1,  ss.length - 1).includes(s);
}

s = "abab"
console.log(repeatedSubstringPattern(s));
s = "aba"
console.log(repeatedSubstringPattern(s));