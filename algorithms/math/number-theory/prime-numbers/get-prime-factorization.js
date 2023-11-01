/*
Prime Factorization

    Prime factorization is a way of breaking down a number into a multiplication of smaller numbers called prime numbers. 
    It's like finding the "building blocks" that, when multiplied together, give you the original number.

    For example, let's say we want to prime factorize the number 12. We find the prime numbers that, when multiplied, give us 12:

    12 = 2 × 2 × 3

    So, the prime factorization of 12 is 2 × 2 × 3. This tells us that 12 is made up of two 2's and one 3 when we multiply them together.


    - Time Complexity: O(sqrt(n)))
*/

var primeFactorization = function(n) {
    const factors = [];

    // Divide the number by 2 repeatedly while it's even
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }

    // Divide the number by odd numbers starting from 3
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }

    // If n is a prime greater than 2
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

const number = 24;
const factors = primeFactorization(number);
console.log(`Prime factorization of ${number}:`, factors);