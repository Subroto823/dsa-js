/*
 # Factorial
    # Time Complexity O(n)
 */

const factorial = (num) => {
    let product = 1;
    for(let i = 2; i <= num; i++) {
        product *= i;
    }
    return product;
}

console.log(factorial(5));