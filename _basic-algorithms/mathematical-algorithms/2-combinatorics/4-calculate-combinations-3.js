/*
Using Multiplicative Formula:

The nCr value can be calculated directly using the multiplicative formula: nCr = n! / (r! * (n-r)!). Instead of calculating the full factorials, we can use iterative multiplication to calculate the numerator and denominator separately. */

function nCr(n, r) {
    if (n < r) {
        throw new Error("n should be greater than or equal to r.");
    }

    r = Math.min(r, n - r); // Optimize to use smaller r value

    let result = 1;
    for (let i = 1; i <= r; i++) {
        result *= n - r + i;
        result /= i;
    }

    return result;
}

const n = 5;
const r = 2;
const result = nCr(n, r); // 5C2 = 10
console.log(result);

/*
It uses a loop to iterate from 1 to r, multiplying and dividing to calculate the nCr value using the Multiplicative Formula.

This implementation has a time complexity of O(r), which makes it efficient for competitive programming, even for large values of n and r. It is suitable for finding individual nCr values quickly without the need for precomputation of Pascal's Triangle.


This implementation is more efficient as it avoids the recursive factorial calculation, and the time complexity of the nCr function using the multiplicative formula is O(r). For large values of n and r, this approach is significantly faster and more practical. */