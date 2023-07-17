// intersection operation
// elements of set a that are also in set b
function intersection(setA, setB) {
    let intersectionSet = new Set();

    for (let i of setB) {
        if (setA.has(i)) {
            intersectionSet.add(i);
        }
    }
    return intersectionSet;
}

let setA = new Set(['a', 'b', 'c']);
let setB = new Set(['m', 'a', 'n']);

let result = intersection(setA, setB);
console.log(result);