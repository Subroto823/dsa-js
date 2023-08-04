/*
GCD (Greatest Common Divisor) function in JavaScript using the iterative Euclidean algorithm. */

function gcd(a, b) {
    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

console.log(gcd(48, 18));