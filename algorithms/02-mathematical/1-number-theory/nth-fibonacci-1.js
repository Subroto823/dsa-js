/**
# Nth Fibonacci 
    # Recursive approach
    # Time complexity - O(2^n)
        (The time complexity here is exponential, so, recursion is not a good solution to the nth fibonacci problem)

    (Fibonacci Sequence: 0, 1, 1, 2, 3, 5 ... so on)
 */

const nthFibonacci = (number) => {
    if(number < 2) {
        return number;
    }
    return nthFibonacci(number - 2) + nthFibonacci(number - 1);
}

console.log(nthFibonacci(5));

/*
This naive approach leads to an exponential time complexity, making it impractical for larger values of n. The redundant calculations in the recursion make it highly inefficient compared to more optimized methods like dynamic programming or matrix exponentiation. */