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

var permutations = function(n) {
    return factorial(n);
}

var factorial = function(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

const n = 5;
const result = permutations(n); // 5! = 120
console.log(result); // Output: 120

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/