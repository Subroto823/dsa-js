/*
Combinations refer to the selections of elements from a set without regard to the order in which they are selected. In other words, a combination is a subset of the elements of a set, and the order of the elements within the subset does not matter. The number of combinations of a set depends on the number of elements in the set and the selection rules.

For example, consider the set {A, B, C}. The combinations of this set, taken two at a time, are:

    AB
    AC
    BC

The combinations are not considered as separate entities based on the order of elements (e.g., BA and CA are not included because they are equivalent to AB and AC, respectively).

The number of combinations of n distinct elements taken r at a time is denoted as nCr, and it can be calculated using the formula:

nCr = n! / (r! * (n-r)!),

where n! (n factorial) represents the number of permutations of n distinct elements (arrangements in a specific order), and r! and (n-r)! account for the overcounting due to the order of the elements not mattering in combinations.

For example, if you have a set of 5 distinct elements and you want to find the number of combinations of 3 elements taken at a time, you would calculate:

5C3 = 5! / (3! * 2!) = 10.

So, there are 10 combinations of the set {A, B, C, D, E} taken 3 at a time. 
*/

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

// Function to calculate nCr (combination)
function nCr(n, r) {
    if (n < r) {
        throw new Error("n should be greater than or equal to r.");
    }

    return factorial(n) / (factorial(r) * factorial(n - r));
}

const n = 5;
const r = 2;
const result = nCr(n, r); // 5C2 = 10
console.log(result);

/*
Note: Calculating the factorial using recursion can lead to stack overflow for large values of n, especially in competitive programming. In practice, it's better to use memoization or other techniques to optimize the factorial calculation, especially when dealing with large values of n.

Combinations have various applications in mathematics, statistics, and problem-solving. In competitive programming, combinations are frequently used to count the number of ways to select objects from a set, solve problems involving subsets, and in various probability and combinatorics scenarios. */