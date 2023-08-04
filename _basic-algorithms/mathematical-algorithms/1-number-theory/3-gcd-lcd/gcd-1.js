/*
GCD (Greatest Common Divisor) of two positive integers a and b is the largest positive integer that divides both a and b without leaving any remainder. It is also known as the greatest common factor (GCF) or highest common divisor (HCD).

Here's the recursive implementation of the GCD function using the Euclidean algorithm.
*/

function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

console.log(gcd(48, 18))