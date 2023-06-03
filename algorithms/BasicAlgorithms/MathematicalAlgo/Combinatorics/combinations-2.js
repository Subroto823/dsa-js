function combinations(elements) {
    const result = [];

    function getCombinations(array, comb = []) {
        for(let i = 0; i < array.length; i++) {
            let curr = comb.concat(array[i]);
            result.push(curr);
            getCombinations(array.slice(i + 1), curr);
        }
    }
    
    getCombinations(elements);
    return result;
}

console.log(combinations([5, 8]));
console.log(combinations(["a", "b"]));