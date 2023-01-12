/*
 *
 * Factorial
 * Time Complexity O(n)
 * 
 */

const factorial = (num) => {
    let product = 1;
    for(let i = num; i > 1; i--) {
        product = product * i;
    }
    return product;
}

console.log(factorial(5));