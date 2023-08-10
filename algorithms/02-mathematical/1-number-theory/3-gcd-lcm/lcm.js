/*
The Least Common Multiple (LCM) is the smallest positive integer that is divisible by both of the given positive integers without leaving any remainder. */

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

console.log(lcm(6, 8));