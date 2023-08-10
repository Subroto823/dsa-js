/*
# GCD (Greatest Common Divisor) - Euclidean Algorithm
    # Iterative approach
    # Time Complexity: O(log(min(a, b))) */

function gcd(a, b) {
    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

console.log(gcd(48, 18));