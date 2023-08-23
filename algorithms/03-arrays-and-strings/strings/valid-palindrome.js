/*
Problem: Valid Palindrome

Given a string as input, your task is to write a function that determines whether the input string is a valid palindrome. Ignore non-alphanumeric characters and consider the string to be case-insensitive.

Example: 
    Input: "civic"
    Output: true

    Input: "Was it a car or a cat I saw?"
    Output: true

Constraints:
    The length of the input string is at most 10^5 characters.

Note:
    Palindromes are strings that read the same forwards and backwards.
    Ignore capitalization and non-alphanumeric characters when determining palindromes.
*/


/*
Time Complexity: O(n)
Space Complexity: O(n) */

const isPalindrome = (s) => {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedString === cleanedString.split('').reverse().join('');
}

let s = "civic";
console.log(isPalindrome(s));

s = "Was it a car or a cat I saw?";
console.log(isPalindrome(s));



/*
Time Complexity: O(n)
Space Complexity: O(1) */

const isAlphanumeric = c => {
    return (c.charCodeAt(0) > 96 && c.charCodeAt(0) < 123) || 
        (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58);
}

const isPalindromeII = (s) => {
    let start = 0, end = s.length - 1;

    while (start < end) {
        c1 = s[start].toLowerCase();
        c2 = s[end].toLowerCase();

        if (!isAlphanumeric(c1)) start++;
        else if (!isAlphanumeric(c2)) end--
        else if (c1 !== c2) return false;
        else start++, end--
    }

    return true;
}

s = "civic";
console.log(isPalindromeII(s));

s = "A man, a plan, a canal: Panama"
console.log(isPalindromeII(s));