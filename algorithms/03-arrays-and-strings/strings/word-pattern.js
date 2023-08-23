/*
Problem: Word Pattern

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Example:

    Input: pattern = "abba", s = "dog cat cat dog"
    Output: true

    Input: pattern = "abba", s = "dog cat cat fish"
    Output: false

    Input: pattern = "aaaa", s = "dog cat cat dog"
    Output: false

Constraints:

    1 <= pattern.length <= 300
    pattern contains only lower-case English letters.
    1 <= s.length <= 3000
    s contains only lowercase English letters and spaces ' '.
    s does not contain any leading or trailing spaces.
    All the words in s are separated by a single space.

*/

var wordPattern = function (pattern, s) {
    const words = s.split(" ");
    if (pattern.length !== words.length) return false;

    const map = new Map();
    const wordsSet = new Set();

    for (let i = 0; i < pattern.length; i++) {
        let c = pattern[i];

        if (!map.has(c) && wordsSet.has(words[i])) return false
        if(map.has(c) && map.get(c) !== words[i]) return false;

        map.set(c, words[i]);
        wordsSet.add(words[i]);
    }

    return true;
}

let pattern = "abba", s = "dog cat cat dog";
console.log(wordPattern(pattern, s));
Output: true

pattern = "abba", s = "dog cat cat fish";
console.log(wordPattern(pattern, s));
Output: false

pattern = "aaaa", s = "dog cat cat dog";
console.log(wordPattern(pattern, s))
Output: false