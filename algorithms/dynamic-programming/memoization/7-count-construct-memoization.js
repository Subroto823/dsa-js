/*
Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return the number of ways that the `target`can be constructed by concatenating elements of the `wordBank` array.

You may reuse elements of `wordBank` as many times as needed. 

countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])
    # abc + def = abcdef 
    # answer -> 1

countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
    # answer -> 0

countConstruct('purple', ["purp", "p", "ur", "le", "purpl"])
    # purp + le
    # p + ur + p + le
    # answer -> 2
*/

const countConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if (target === '') return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const numWaysForRest = (countConstruct(suffix, wordBank, memo))
            totalCount += numWaysForRest;
        }
    }

    memo[target] = totalCount;
    return totalCount;
}

console.log(countConstruct('purple', ["purp", "p", "ur", "le", "purpl"]))
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(countConstruct("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(countConstruct("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzx", ["z", "zz", "zzz", "zzzz", "zzzzz", "zzzzzz"]))


/*
m = target.length
n = wordBank.length

brute force approach complexity
    time: O(n^m * m) - exponential complexity
    space: O(m^2)

countConstruct memoized complexity
    time: O(n * m^2) - polynomial complexity
    space: O(m^2)
*/