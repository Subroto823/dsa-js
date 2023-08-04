function sieveOfEratosthenes(n) {
    let sieve = new Array(n + 1).fill(true);
    sieve[0] = false;
    sieve[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= n; j += i) {
                sieve[j] = false;
            }
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

// Example usage:
let startRange = 1;
let endRange = 100;
let primesInRange = sieveOfEratosthenes(endRange);

console.log(primesInRange);