const union = (setOne, setTwo) => {
    let unionSet = new Set(setOne);

    for (let i of setTwo) {
        unionSet.add(i);
    }
    return unionSet;
}

let setA = new Set(['a', 'b', 'c']);
let setB = new Set(['m', 'a', 'n']);

let result = union(setA, setB);
console.log(result);