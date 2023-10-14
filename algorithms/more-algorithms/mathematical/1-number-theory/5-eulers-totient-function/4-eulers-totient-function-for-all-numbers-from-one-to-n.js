/*
To calculate Euler's Totient Function (φ function) for all numbers from 1 to n efficiently, we can use the Sieve of Eratosthenes algorithm to precompute the φ values for each number up to n. The Sieve of Eratosthenes is an efficient algorithm for finding all prime numbers up to a given limit and can be adapted to compute φ values. */

function computePhiSieve(n) {
    const phi = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        phi[i] = i;
    }

    for (let i = 2; i <= n; i++) {
        // If phi[i] is equal to i, it means i is prime
        if (phi[i] === i) {
            for (let j = i; j <= n; j += i) {
                // Update φ values for multiples of i using φ(i * j) = φ(i * j) / i * (i - 1)
                phi[j] -= phi[j] / i;
            }
        }
    }

    return phi.slice(1);
}

const n = 12;
const phiValues = computePhiSieve(n);
console.log(phiValues);

/*
In this implementation, the computePhiSieve(n) function creates an array phi of size(n + 1) to store the φ values.It initializes the array with the value of each index(φ(i) = i).Then, it uses the Sieve of Eratosthenes algorithm to compute the φ values for each number.If the value of phi[i] remains equal to i, it means i is a prime number, and the φ function formula is used to update the φ values for its multiples.

The resulting phi array will contain the φ values for all numbers from 1 to n. We can access the φ value for a specific number k by using phi[k].For example, in the test section, the φ values for numbers from 1 to 12 are printed. */