/*
# BigMod
# (binary exponentiation with modular arithmetic)
    # Efficient Approach
    # Time Complexity : O(logb)
*/
function bigmod(a, b, m) {
    if (b === 0) return 1 % m;

    a = a % m;
    const t = bigmod(a, Math.floor(b / 2), m);
    const tSquared = (t * t) % m;

    if (b % 2 === 1) return (a * tSquared) % m;
    return tSquared;
}

console.log(bigmod(10, 2, 7));
console.log(bigmod(2, 7, 10));
console.log(bigmod(2, 50, 10000007));

/*
The "bigmod" technique, also known as modular exponentiation, is a mathematical algorithm used to efficiently compute the result of raising a number to a large power modulo another number. This technique is particularly useful in situations where the direct calculation of the exponentiation result could lead to overflow or consume a lot of computational resources.

The basic idea of the bigmod technique is to break down the exponentiation process into smaller steps, taking advantage of the properties of modular arithmetic to keep the intermediate results manageable. 

The BigMod technique is widely used in competitive programming and cryptography, where large numbers and modular arithmetic are frequently encountered. By using this technique, we can efficiently compute modular exponentiations without encountering issues related to overflowing intermediate values. This is crucial for handling very large numbers and ensuring correctness and performance in computational tasks.*/