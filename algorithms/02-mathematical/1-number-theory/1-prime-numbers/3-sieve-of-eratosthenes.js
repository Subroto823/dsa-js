/*
# Prime Numbers in range from one to n
# Sieve of eratosthenes

    # Time Complexity:  O(n * log(logn))
*/

function sieveOfEratosthenes(n) {
    const primes = [];
    const isPrime = new Array(n + 1).fill(true);

    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return primes;
}

let n = 10;
let primesInRange = sieveOfEratosthenes(n);
console.log(primesInRange);

/*
The overall time complexity of the sieveOfEratosthenes function is approximately O(n * log(log(n))), which is significantly more efficient than the previous basic implementation (O(n * sqrt(n))) for large values of n. The Sieve of Eratosthenes is one of the most efficient algorithms to find prime numbers in a given range.
*/