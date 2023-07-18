/*
 # Prime Number (optimized primality test)
 * Time Complexity O(sqrt(n))
 *
 * Integers larger than the square root do not need to be checked because, whenever "number = a*b", one of the two factors "a" and "b" is less than or equal to the square root of "n"
 * 
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


