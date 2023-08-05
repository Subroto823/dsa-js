/*
# binary exponentiation with modular arithmetic
    # Efficient Approach
    # Time Complexity : O(logb)
*/
function binpow(a, b, m) {
    if (b === 0) {
        return 1 % m;
    }
    if (b % 2 === 0) {
        const t = binpow(a, b / 2, m);
        return (t * t) % m;
    } else {
        const t = binpow(a, (b - 1) / 2, m);
        const tSquared = (t * t) % m;
        return (a * tSquared) % m;
    }
}

console.log(binpow(10, 2, 7));
console.log(binpow(2, 7, 10));