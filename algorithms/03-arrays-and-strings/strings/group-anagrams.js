/*
Problem: Group Anagrams

Given an array of strings, your task is to write a function that groups the anagrams together. Anagrams are strings that have the same characters but in a different order.

Example:
    Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
    Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

Constraints:
    1 <= strs.length <= 10^4
    0 <= strs[i].length <= 100
    strs[i]
    strs[i] consists of lowercase English letters.
*/

const groupAnagrams = (strs) => {
    const map = new Map();

    for (let word of strs) {
        let sortedWord = word.split('').sort().join('')

        if (!map.has(sortedWord)) {
            map.set(sortedWord, [])
        }

        let anagrams = map.get(sortedWord).concat(word);
        map.set(sortedWord, anagrams)
    }

    return new Array(...map.values());
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))