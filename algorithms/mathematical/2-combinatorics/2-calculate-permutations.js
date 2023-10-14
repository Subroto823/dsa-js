/*
# Permutations

Permutations refer to the arrangements of elements in a specific order. In other words, a permutation is a rearrangement of the elements of a set into a different order. The number of permutations of a set depends on the number of elements in the set and the arrangement rules.

For example, consider the set {A, B, C}. The permutations of this set are:

    ABC
    ACB
    BAC
    BCA
    CAB
    CBA

In general, if you have n distinct elements, there are n! (n factorial) permutations of those elements. The factorial of a non-negative integer n (denoted as n!) is the product of all positive integers from 1 to n. */

function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

function permutations(n) {
    return factorial(n);
}

const n = 5;
const result = permutations(n); // 5! = 120
console.log(result); // Output: 120

/*
The time complexity of calculating the factorial is O(n), and since calculating permutations involves calculating the factorial, the time complexity of calculating permutations is also O(n). */