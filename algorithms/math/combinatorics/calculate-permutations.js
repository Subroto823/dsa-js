/*
Permutations

Permutations refer to the arrangements of elements in a specific order. In other words, a permutation is a rearrangement of the elements of a set into a different order. 
The number of permutations of a set depends on the number of elements in the set and the arrangement rules.

For example, consider the set {A, B, C}. The permutations of this set are:

    ABC
    ACB
    BAC
    BCA
    CAB
    CBA

In general, if you have n distinct elements, there are n! (n factorial) permutations of those elements.
*/

const factorial = require('../number-theory/factorial');

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var permutations = function (n) {
    return factorial(n);
}


function main() {
    const n = 5;
    console.log(permutations(n));
}

if (require.main === module) main();
module.exports = permutations;
