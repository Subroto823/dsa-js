/**
 * Nth Fibonacci Number
 * 
 * Recursive Approach
 * 
 * Time Complexity: O(2^n)
 * - This recursive approach has exponential time complexity, making it inefficient for large values of n.
 * - The redundant calculations in the recursion make it highly inefficient compared to more optimized methods like dynamic programming or matrix exponentiation. 
 */

var nthFibonacci = function(number) {
    if(number < 2) return number;
    return nthFibonacci(number - 2) + nthFibonacci(number - 1);
}

console.log(nthFibonacci(5));


/**
 * Iterative approach (efficient)
 * Time complexity - O(n)
 */

var nthFibonacci = function(n) {
    if (n <= 0) return 0;

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}

console.log(nthFibonacci(5));
console.log(nthFibonacci(8));