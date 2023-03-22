function permutation(arr) {
    const res = [];
    
    function generate(array, perm = []) {
        if(array.length === 0) {
            res.push(perm);
        }

        for(let i = 0; i < array.length; i++) {
            let curr = array.slice();
            let next = curr.splice(i, 1);
            generate(curr, perm.concat(next));
        }
    }
    generate(arr);
    return res;
}

console.log(permutation([5, 8]));
console.log(permutation(["a", "b"]));