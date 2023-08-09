/*
# Sieve of eratosthenes
# Prime Numbers in range from one to n
    Time Complexity:  O(n * log(logn))
*/

function sieveOfEratosthenes(n) {
    let sieve = new Array(n + 1).fill(true);
    sieve[0] = false;
    sieve[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (!sieve[i]) continue
        for (let j = i * i; j <= n; j += i) {
            sieve[j] = false;
        }
    }

    let primes = [];
    for (let i = 0; i <= n; i++) {
        if (sieve[i]) {
            primes.push(i);
        }
    }

    return primes;
}

let n = 100;
let primesInRange = sieveOfEratosthenes(n);
console.log(primesInRange);

/*
The overall time complexity of the sieveOfEratosthenes function is approximately O(n * log(log(n))), which is significantly more efficient than the previous basic implementation (O(n * sqrt(n))) for large values of n. The Sieve of Eratosthenes is one of the most efficient algorithms to find prime numbers in a given range.
*/