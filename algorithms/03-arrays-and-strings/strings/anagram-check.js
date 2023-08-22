/*
Problem: Anagram Check

Given two strings as input, your task is to write a function that determines whether the two strings are anagrams of each other.

Example:
    Input: str1 = "listen", str2 = "silent"
    Output: true


Constraints:
    The lengths of s1 and s2 are at most 10^5 characters.

Note:
    An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

/*
# Sorting Approach
    Time Complexity: O(nlogn)
    Space Complexity: O(n) 
*/
function areAnagrams(s1, s2) {
    // Remove spaces and convert strings to lowercase
    s1 = s1.replace(/\s/g, '').toLowerCase();
    s2 = s2.replace(/\s/g, '').toLowerCase();

    const sortedS1 = s1.split('').sort().join('');
    const sortedS2 = s2.split('').sort().join('');

    return s1 === s2;
}

let str1 = "listen", str2 = "silent";
console.log(areAnagrams(str1, str2));


/*
# Mapping Approach
    Time Complexity: O(n)
    Space Complexity: O(n) 
*/
function areAnagramsII(s1, s2) {
    s1 = s1.replace(/\s/g, '').toLowerCase();
    s2 = s2.replace(/\s/g, '').toLowerCase();

    if (s1.length !== s2.length) return false;

    const charCount = {};
    
    for (let char of s1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (let char of s2) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }

    return true;
}

str1 = "triangle", str2 = "integral";
console.log(areAnagramsII(str1,str2));

str1 = "orchestra", str2 = "carthorse";
console.log(areAnagramsII(str1, str2));