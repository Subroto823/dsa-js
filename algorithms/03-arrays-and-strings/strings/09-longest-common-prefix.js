/*
Problem: Longest Common Prefix

Given an array of strings, your task is to write a function that finds and returns the longest common prefix among all strings in the array. 

Example:
    Input: ["flower", "flow", "flight"]
    Output: "fl"
*/

var longestCommonPrefix = function (strs) {
    let n = strs.length;
    let prefix = '';
    let minLen = strs.reduce((acc, str) => Math.min(str.length, acc), Infinity);

    outer: for (let i = 0; i < minLen; i++) {
        const char = strs[0][i];

        for (let j = 1; j < n; j++) {
            if (strs[j][i] !== char) {
                break outer;
            }
        }

        prefix += char
    }

    return prefix;
};

let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));