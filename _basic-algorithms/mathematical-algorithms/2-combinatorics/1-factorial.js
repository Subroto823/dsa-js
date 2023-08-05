/*
 # Factorial
    # Time Complexity O(n)

# Factorial is a mathematical function that is used to calculate the product of all positive integers from 1 to a given non-negative integer n. It is denoted by the symbol n!. For example:

    0! = 1 (by convention)
    1! = 1
    2! = 2 * 1 = 2
    3! = 3 * 2 * 1 = 6
    4! = 4 * 3 * 2 * 1 = 24
    ...

    In general, n! = n * (n-1) * (n-2) * ... * 2 * 1.
*/

const factorial = (num) => {
    let product = 1;
    for(let i = 2; i <= num; i++) {
        product *= i;
    }
    return product;
}

console.log(factorial(5));

/*
Factorials have applications in various areas of mathematics, especially in combinatorics, where they are used to count permutations and combinations. In competitive programming and problem-solving, factorials are frequently used to efficiently calculate the number of permutations or combinations of elements. 

For example, to calculate the number of permutations of n elements (i.e., the number of ways to arrange n distinct elements), we can use n!. 
Similarly, the number of combinations of n elements taken r at a time (i.e., the number of ways to select r elements from a set of n distinct elements without considering the order) can be calculated using n! / (r! * (n-r)!) */