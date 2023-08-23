/*
Problem: First Unique Character in a String

Given a string as input, your task is to write a function that finds and returns the index of the first non-repeating character in the string. If all characters are repeating, return -1.

Example:
    Input: "leetcode"
    Output: 0 (The first non-repeating character is 'l' at index 0)

    Input: s = "loveleetcode"
    Output: 2

Constraints:
    1 <= s.length <= 105
    s consists of only lowercase English letters.

*/

/*
# Naive Approach
    * Time Complexity: O(n^2)
    * Space Complexity: O(n) */
   
const firstUniqChar = (s) => {
    let uniqueIndex = -1;

    for (let i = 0; i < s.length; i++) {
        let firstIndex = s.indexOf(s[i]);

        if (firstIndex === s.lastIndexOf(s[i])) {
            uniqueIndex = firstIndex;
            break;
        }
    }

    return uniqueIndex;
}

let s = "leetcode";
console.log(firstUniqChar(s));

s = "loveleetcode";
console.log(firstUniqChar(s));

s = "aabb";
console.log(firstUniqChar(s));


/*
# Mapping Approach
    * Time Complexity: O(n)
    * Space Complexity: O(n) */

const firstUniqCharII = (s) => {
    const charFreq = new Map();

    for (let c of s) {
        charFreq.set(c, (charFreq.get(c) ?? 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if(charFreq.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
}

s = "leetcode";
console.log(firstUniqCharII(s));

s = "loveleetcode";
console.log(firstUniqCharII(s));

s = "aabb";
console.log(firstUniqCharII(s));

