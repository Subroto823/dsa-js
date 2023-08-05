/*
# binary exponentiation with modular arithmetic
    # Efficient Approach
    # Time Complexity : O(logb)
*/
function modularExponentiation(a, b, m) {
    if (b === 0) {
        return 1 % m;
    }

    a = a % m;
    const t = modularExponentiation(a, Math.floor(b / 2), m);
    const tSquared = (t * t) % m;

    if (b % 2 === 0) {
        return tSquared;
    } else {
        return (a * tSquared) % m;
    }
}

console.log(modularExponentiation(10, 2, 7));
console.log(modularExponentiation(2, 7, 10));