/*
# Prime Numbers in range from one to n (Basic implementation)
    Time Complexity:  O(n * sqrt(n))
*/
function isPrime(number) {
    if (number <= 1) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }

    return true;
}

function findPrimesInRange(n) {
    let primes = [];

    for (let num = 0; num <= n; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }

    return primes;
}

let n = 100;
let primesInRange = findPrimesInRange(n);
console.log(primesInRange)