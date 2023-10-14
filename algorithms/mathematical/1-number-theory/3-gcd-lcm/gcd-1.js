/*
# GCD (Greatest Common Divisor) - Euclidean Algorithm

    # GCD of two positive integers a and b is the largest positive integer that divides both a and b without leaving any remainder. It is also known as the greatest common factor (GCF) or highest common divisor (HCD).

    # Recursive approach
    # Time Complexity: O(log(min(a, b)))
*/

function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

console.log(gcd(48, 18))


/*
GCD(48, 12)

In the first iteration: remainder = 48 % 18 = 12, a = 18, and b = 12.
In the second iteration: remainder = 18 % 12 = 6, a = 12, and b = 6.
In the third iteration: remainder = 12 % 6 = 0, a = 6, and b = 0

So, GCD(48, 12) = 6 */