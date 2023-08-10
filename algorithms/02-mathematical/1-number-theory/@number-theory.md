# Fibonacci sequence
* 
    * In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of two preceding ones
    * The first two numbers in the sequence are 0 and 1
    
        Fibonacci(2) = [0, 1]
        Fibonacci(3) = [0, 1, 1]
        Fibonacci(4) = [0, 1, 1, 2]
        Fibonacci(5) = [0, 1, 1, 2, 3]
        Fibonacci(6) = [0, 1, 1, 2, 3, 5]
        Fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]

    ### fib(n) = fib[n - 2] + fib[n - 1]


# Factorial!
Factorial is a mathematical function that is used to calculate the product of all positive integers from 1 to a given non-negative integer n. 
* It is denoted by the symbol n!. For example:

    0! = 1 (by convention)
    1! = 1
    2! = 2 * 1 = 2
    3! = 3 * 2 * 1 = 6
    4! = 4 * 3 * 2 * 1 = 24
    ...

* In general, n! = n * (n-1) * (n-2) * ... * 2 * 1.

Factorials have applications in various areas of mathematics, especially in combinatorics, where they are used to count permutations and combinations. In competitive programming and problem-solving, factorials are frequently used to efficiently calculate the number of permutations or combinations of elements. 

# Power of Two:
* determine if the number is power of two:
    * An inter is a power of two if there exists an integer 'x' such that 'n' == 2^x

    isPowerOfTwo(1) = true(2^0)
    isPowerOfTwo(2) = true(2^1)
    isPowerOfTwo(3) = false

    ## using bitwise operator we can solve the problem with constant complexity of O(1)

       * using bitwise and operator(&)
           n & (n - 1) === 0
       
       # decimal   binary
        1         1
        2         10
        3         100
        4         1000

       # for 1
         1 & (1 - 1) = (1 & 0) = 0
         In binary, (0001 & 0000) = 0

       # for 2
         2 & (2 - 1) = (2 & 1) = 0
         In binary, (0010 & 0001) = 0

       # for 1
         3 & (3 - 1) = (3 & 2) = 0
         In binary, (0100 & 0010) = 0

       # for 4
         4 & (4 - 1) = (4 & 3) = 0
         In binary, (1000 & 0100) = 0