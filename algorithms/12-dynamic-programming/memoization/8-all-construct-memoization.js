/*
Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return a 2D array containing all of the ways that the `target`can be constructed by concatenating elements of the `wordBank` array.

You may reuse elements of `wordBank` as many times as needed. 

allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
    # abc + def = abcdef 
    # answer -> [[abc, def], [ab, c, def], [ab, c, def], [abcd, ef]]

allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
    # answer -> []

allConstruct('purple', ["purp", "p", "ur", "le", "purpl"])
    # purp + le
    # p + ur + p + le
    # answer -> [[prup, le], [p, ur, p, le]]

allConstruct('', ["cat", "dog", "mouse"])
    # answer -> [[]]
*/

const allConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if (target === '') return [[]];

    const result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays)
        }
    }

    memo[target] = result;
    return result;
}

console.log(allConstruct('purple', ["purp", "p", "ur", "le", "purpl"]));
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(allConstruct("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); 
console.log(allConstruct("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzx", ["z", "zz", "zzz", "zzzz", "zzzzz", "zzzzzz"]))


/*
m = target.length
n = wordBank.length

brute force approach complexity
    time: O(n^m * m) - exponential complexity
    space: O(m)

allConstruct memoized complexity
    time: O(n^m)
    space: O(m)
*/