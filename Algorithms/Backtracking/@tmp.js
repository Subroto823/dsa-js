function combinations(elements) {
    const result = [];

    var getCombinations = function (array, prefix='') {
        for (var i = 0; i < array.length; i++) {
            result.push(prefix + array[i]);
            getCombinations(array.slice(i + 1), prefix + array[i]);
        }
    }

    getCombinations(elements);
    return result;
}

console.log(combinations(["a", "b"]));