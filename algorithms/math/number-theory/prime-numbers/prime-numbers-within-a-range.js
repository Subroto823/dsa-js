/**
 * Prime Numbers within a range from 1 to n
 * 
 * Naive Approach
 * Time Complexity:  O(n * sqrt(n))
 */

const isPrime = require('./is-prime');

var findPrimesInRange = function (n) {
    const primes = [];

    for(let num = 0; num <= n; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }

    return primes;
}

let primesInRange = findPrimesInRange(10);
console.log(primesInRange);


/*
While this approach works, it has a few downsides:

- Efficiency: The code checks each number from 0 to n for primality by testing its divisibility by all integers up to its square root. This results in a time complexity of approximately O(n √n), which can become slow for larger values of n.

- Repetitive Primality Testing: The isPrime function performs primality testing for every number in the range, even for those that have already been identified as prime. This repetitive testing wastes computation. 
*/