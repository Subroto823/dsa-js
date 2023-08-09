/*
 # Prime Number (optimized primality test)
    
    # Integers larger than the square root do not need to be checked because, whenever "number = a*b", one of the two factors "a" and "b" is less than or equal to the square root of "n"

    Time Complexity O(sqrt(n))
*/

const isPrime = (number) => {
    if(number < 2) return false;

    for(let i = 2; i <= Math.sqrt(number) ; i++) {
        if(number % i === 0 ) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(2504987));
console.log(isPrime(17));

/*
This method works well for small to moderately large numbers, but it may become inefficient for very large numbers, and more advanced primality testing algorithms would be needed in such cases. */

