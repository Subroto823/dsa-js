/**
 * GCD (Greatest Common Divisor) - Euclidean Algorithm
 * 
 * GCD of two positive integers a and b is the largest positive integer that divides both a and b without leaving any remainder. 
 * It is also known as the greatest common factor (GCF) or highest common divisor (HCD).
 * 
 * Recursive approach
 * Time Complexity: O(log(min(a, b)))
 */

var gcdRec = function (a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcdRec(b, a % b);
    }
}


/**
 * Iterative approach
 * Time Complexity: O(log(min(a, b))) 
 */

var gcd = function (a, b) {
    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
}


function main() {
    console.log(gcdRec(48, 18))
    console.log(gcd(48, 18));
}

if (require.main === module) main();
module.exports = gcd;


/*
GCD(48, 18)

In the first iteration: remainder = 48 % 18 = 12, a = 18, and b = 12.
In the second iteration: remainder = 18 % 12 = 6, a = 12, and b = 6.
In the third iteration: remainder = 12 % 6 = 0, a = 6, and b = 0

So, GCD(48, 18) = 6 
*/