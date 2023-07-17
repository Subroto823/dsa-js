// difference operation
// elements of set a that are not in set b
function difference(setA, setB) {
    let differenceSet = new Set(setA);

    for (let i of setB) {
        differenceSet.delete(i);
    }
    return differenceSet;
}

let setA = new Set(['a', 'b', 'c']);
let setB = new Set(['m', 'a', 'n']);

let result = difference(setA, setB);
console.log(result);