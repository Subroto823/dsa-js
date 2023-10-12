const { swap } = require('../../__helpers/swap');

const permutations = function(arr) {
    const result = [];

    const generate = function(start, end){
        if(start === end) {
            result.push([...arr]);
        }

        for(let i = start; i <= end; i++) {
            swap(arr, start, i);
            generate(start + 1, end);
            swap(arr, start, i);
        }
    }

    generate(0, arr.length - 1);
    return result;
}

console.log(permutations([1, 2]));
console.log(permutations(["a", "b"]));