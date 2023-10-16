/*
To perform modular division for prime numbers in JavaScript, we can make use of Fermat's Little Theorem. For a prime number p, Fermat's Little Theorem states that for any integer a not divisible by p, a ^ (p - 1) ≡ 1(mod p).

Using this theorem, we can calculate the modular inverse of a number a modulo p, which is denoted as a ^ (-1) ≡ a ^ (p - 2)(mod p). */

// Function to calculate the modular exponentiation a^b % m
function modularExponentiation(a, b, m) {
    if (b === 0) {
        return 1 % m;
    }

    a = a % m;
    const t = modularExponentiation(a, Math.floor(b / 2), m);
    const tSquared = (t * t) % m;

    if (b % 2 === 0) {
        return tSquared;
    } else {
        return (tSquared * a) % m;
    }
}

// Function to calculate the modular inverse using Fermat's Little Theorem
function modularInverse(a, p) {
    return modularExponentiation(a, p - 2, p);
}

// Function to perform modular division a / b % p for prime number p
function modularDivision(a, b, p) {
    a = a % p;
    const inverse = modularInverse(b, p);
    return (a * inverse) % p;
}

const a = 8;
const b = 2;
const prime = 7;

const result = modularDivision(a, b, prime);
console.log(result); // Output: 4 (8 / 2 % 7 = 4)
