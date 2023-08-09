const { swap } = require('../../__helper-functions/swap');

const permutations = (arr) => {
    const result = [];

    const generate = (array, start, end) => {
        if(start === end) {
            result.push([...array]);
        }

        for(let i = start; i <= end; i++) {
            swap(array, start, i);
            generate(array, start + 1, end);
            swap(array, start, i);
        }
    }

    generate(arr, 0, arr.length - 1);
    return result;
}

console.log(permutations([1, 2]));
console.log(permutations(["a", "b"]));