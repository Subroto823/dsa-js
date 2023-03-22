function permutation(arr) {
    const res = [];
    let start = 0;
    let end = arr.length - 1;

    function generate(array, start, end) {
        if(start === end) {
            res.push([...array]);
        }

        for(let i = start; i < end; i++) {
            
        }
    }

    generate(arr, start, end);
    return res;
}

console.log(permutation([5, 7, 8]));
console.log(permutation(["a", "b", "c"]));