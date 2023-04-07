
function stableMarriage(prefer) {
    
}

let prefer = {
    Men: {
        Tom: ["Alice", "Mary", "Lucy"],
        Bob: ["Lucy", "Mary", "Alice"],
        Peter: ["Mary", "Alice", "Lucy"]
    },
    Women: {
        Alice: ["Bob", "Tom", "Peter"],
        Mary: ["Tom", "Bob", "Peter"],
        Lucy: ["Peter", "Bob", "Tom"]
    }
}, N = 3;
console.log(stableMarriage(prefer, N));