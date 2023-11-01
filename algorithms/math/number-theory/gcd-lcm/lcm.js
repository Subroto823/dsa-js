/**
 * LCM (Least Common Multiple )
 * LCM is the smallest positive integer that is divisible by both of the given positive integers without leaving any remainder. 
 * 
 * The approach is to use the relationship between GCD and LCM:
 * - LCM(a, b) = (a * b) / GCD(a, b)
 *  Time Complexity: O(log(min(a, b)))
 */

var lcm = function(a, b) {
    return (a * b) / gcd(a, b);
}

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

console.log(lcm(6, 8));

/*
LCM(6, 8)
    = (6 * 8) / GCD(6, 8)
    = 48 / 2
    = 24
*/