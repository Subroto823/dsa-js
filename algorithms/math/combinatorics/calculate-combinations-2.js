/*
Using Multiplicative Formula:

The nCr value can be calculated directly using the multiplicative formula: nCr = n! / (r! * (n-r)!). 
Instead of calculating the full factorials, we can use iterative multiplication to calculate the numerator and denominator separately. 
*/

var nCr = function(n, r) {
    if (n < r) {
        throw new Error("n should be greater than or equal to r.");
    }

    r = Math.min(r, n - r);

    let result = 1;
    for (let i = 1; i <= r; i++) {
        result *= n - r + i;
        result /= i;
    }

    return result;
}

const n = 5;
const r = 2;
const result = nCr(n, r);
console.log(result);

/*
It uses a loop to iterate from 1 to r, multiplying and dividing to calculate the nCr value using the Multiplicative Formula.

This implementation has a time complexity of O(r), which makes it efficient for large values of n and r. 
It is suitable for finding individual nCr values quickly without the need for precomputation of Pascal's Triangle.

This implementation is more efficient and more practical. 
*/