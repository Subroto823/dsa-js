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

const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1)
        .fill()
        .map(() => []);
    table[0] = [[]];

    for(let i = 0; i <= target.length; i++) {
        for(let word of wordBank) {
            if(target.slice(i, i + word.length) === word) {
                const newCombinations = table[i].map(subArray => [...subArray, word]);
                //table[i + word.length].push(...newCombinations);
                table[i + word.length].push(...newCombinations);

            }
        }
    }
    return table[target.length];
}

console.log(allConstruct('purple', ["purp", "p", "ur", "le", "purpl"]));
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(allConstruct("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); 
console.log(allConstruct("zzzzzzzzzzzzzzzzzzzx", ["z", "zz", "zzz", "zzzz", "zzzzz", "zzzzzz"]))


/*
m = target.length
n = wordBank.length

allConstruct tabulation complexity
    time: O(n^m)
    space: O(n^m)
*/