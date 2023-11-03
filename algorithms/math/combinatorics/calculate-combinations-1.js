/*
Combination

Combination is a selection of items from a larger pool, where the order of selection does not matter.
It is used to count the number of ways to choose a subset of items from a set without regard to the order in which they were chosen. 
Combinations are often denoted as "C(n, r)" or "nCr".

The formula for calculating the number of combinations is given by:

C(n, r) = n! / (r! * (n - r)!)

Where:

    "C(n, r)" represents the number of combinations for selecting "r" elements from a set of "n" distinct elements.
    "n!" (read as "n factorial") represents the product of all positive integers from 1 to n.
*/

var factorial = require('../number-theory/factorial');

/**
 * Time Complexity: O(n)
 */
var nCr = function(n, r) {
    if (n < r) {
        throw new Error("n should be greater than or equal to r.");
    }

    return factorial(n) / (factorial(r) * factorial(n - r));
}

let n = 5;
let r = 2;
console.log(nCr(n, r));


/**
 * When you need to compute many combinations with the same value of "n," you can precompute the factorials for efficiency.
 */