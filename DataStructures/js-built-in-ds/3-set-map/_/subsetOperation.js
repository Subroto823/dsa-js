// subset operation
// true, if all elements of set b is in set a
function subset(setA, setB) {
    for (let i of setB) {
        if (!setA.has(i)) {
            return false
        }
    }
    return true
}

let setA = new Set(['a', 'b', 'c']);
let setB = new Set(['m', 'a', 'n']);

let result = intersection(setA, setB);
console.log(result);