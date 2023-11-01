/**
 * LCM (Least Common Multiple )
 * LCM is the smallest positive integer that is divisible by both of the given positive integers without leaving any remainder. 
 * 
 * The approach is to use the relationship between GCD and LCM:
 * - LCM(a, b) = (a * b) / GCD(a, b)
 *  Time Complexity: O(log(min(a, b)))
 */

const gcd = require('./gcd');

var lcm = function(a, b) {
    return (a * b) / gcd(a, b);
}


function main () {
   console.log(lcm(8, 4));
   console.log(lcm(6, 8));
}

if (require.main === module) main();
module.exports = lcm;


/*
LCM(6, 8)
    = (6 * 8) / GCD(6, 8)
    = 48 / 2
    = 24
*/