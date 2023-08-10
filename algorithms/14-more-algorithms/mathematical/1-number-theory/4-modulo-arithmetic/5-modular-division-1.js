/*
# Modular Inverses and Division:

    # Modular inverse of a modulo m is a number x such that(a * x) % m = 1. Modular division involves dividing a by b modulo m. */

function extendedGCD(a, b) {
    if (a === 0) {
        return [b, 0, 1];
    }

    const [g, x1, y1] = extendedGCD(b % a, a);
    const x = y1 - Math.floor(b / a) * x1;
    const y = x1;

    return [g, x, y];
}

function modularInverse(a, m) {
    const [g, x, y] = extendedGCD(a, m);
    if (g !== 1) {
        throw new Error("Modular inverse does not exist.");
    }
    return (x % m + m) % m;
}

const result = modularInverse(3, 11);
console.log(result); // Output: 4 (3 * 4 % 11 = 12 % 11 = 1)

// Modular division
function modularDivision(a, b, m) {
    const inverse = modularInverse(b, m);
    return (a * inverse) % m;
}

const divisionResult = modularDivision(8, 2, 11);
console.log(divisionResult); // Output: 4 (8 * 4 % 11 = 32 % 11 = 4)