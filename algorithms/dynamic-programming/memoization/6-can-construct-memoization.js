/*
Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return a boolean indicating whether or not the `target`can be constructed by concatenating elements of the `wordBank` array.

You may reuse elements of `wordBank` as many times as needed. 

canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])
    # abc + def = abcdef 
    # answer -> true

canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
    # answer -> false

canConstruct('', ["cat", "dog", "mouse"]) -> true
*/

const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo)) {
                memo[target] = true;
                return true;
            }
        }
    }

    memo[target] = false;
    return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(canConstruct("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(canConstruct("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzx", ["z", "zz", "zzz", "zzzz", "zzzzz", "zzzzzz"]))

/*
m = target.length
n = wordBank.length

brute force approach complexity
    time: O(n^m * m)
    space: O(m^2)

canConstruct memoized complexity
    time: O(n * m^2)
    space: O(m^2)
*/