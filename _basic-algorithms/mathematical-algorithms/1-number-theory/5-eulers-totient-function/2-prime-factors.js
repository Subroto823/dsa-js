/*
# Prime Factor

A prime factor is a prime number that divides a given positive integer exactly, leaving no remainder. In other words, if a positive integer n can be expressed as a product of two or more positive integers, where at least one of them is a prime number, then that prime number is called a prime factor of n.

For example, let's find the prime factors of the number 12:

    # The prime factors of 12 are 2 and 3. (2 * 2 * 3 = 12)
    # 12 can be divided by 2 to get 6, and 6 can be divided by 2 again to get 3 (a prime number). Therefore, 2 is a prime factor of 12.
    # 12 can be divided by 3 to get 4, and 4 can be divided by 2 to get 2 (a prime number). Therefore, 3 is a prime factor of 12.

# Time Complexity: O(sqrt(n) * log(n))
*/

function findPrimeFactors(n) {
    const factors = [];
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }

    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

const num = 60;
const primeFactors = findPrimeFactors(num);
console.log(`Prime factors of ${num}: ${primeFactors}`);

/*
The prime factors of a number are important in various mathematical operations, such as finding the greatest common divisor (GCD) and calculating Euler's Totient Function, among other applications. Prime factorization is also used in cryptography algorithms, like the RSA encryption algorithm, to ensure security and efficiency in data encryption and decryption. */