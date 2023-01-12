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
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for(let i = 0; i <= target.length; i++) {
        for(let word of wordBank) {
            if(target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i];
            }
        }
    }
    
    return table[target.length];
}

console.log(countConstruct('purple', ["purp", "p", "ur", "le", "purpl"]))
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(countConstruct("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(countConstruct("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzx", ["z", "zz", "zzz", "zzzz", "zzzzz", "zzzzzz"]))


/*
m = target.length
n = wordBank.length

countConstruct tabulation complexity
    time: O(n * m^2) - polynomial complexity
    space: O(m)
*/