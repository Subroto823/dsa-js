/*
Problem: Longest Substring Without Repeating Characters

Given a string s, your task is to write a function that finds the length of the longest substring of s without repeating characters.


Example:
    Input: "abcabcbb"
    Output: 3

    Input: "tmmzuxt"
    Output: 5
*/

const lengthOfLongestSubstring = (s) => {
    let max = 0, start = 0;
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            start = Math.max(start, map.get(s[i]) + 1);
        }

        map.set(s[i], i);
        max = Math.max(max, i - start + 1)
    }

    return max;
}

let str = "abcabcbb";
console.log(lengthOfLongestSubstring(str));

str = "tmmzuxt";
console.log(lengthOfLongestSubstring(str));