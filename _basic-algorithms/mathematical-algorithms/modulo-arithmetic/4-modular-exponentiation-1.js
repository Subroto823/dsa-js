/*
# binary exponentiation with modular arithmetic
    # (a^b) % m = ((a % m)^b) % m
*/
function modularExponentiation(a, b, m) {
    return ((a % m) ** b) % m;
}

console.log(modularExponentiation(10, 2, 7));
console.log(modularExponentiation(2, 7, 10));

/*
Downsides of this one-liner implementation:

    Integer Overflow: This implementation may suffer from integer overflow when calculating ((a % m) ** b). The intermediate result of (a % m) ** b could be very large, potentially exceeding the limits of the JavaScript number representation, leading to incorrect results.

    Precision Issues: Due to the nature of floating-point arithmetic in JavaScript, the result of (a % m) ** b may lose precision when b is large, causing inaccuracies in the final result after taking the modulo m.
*/