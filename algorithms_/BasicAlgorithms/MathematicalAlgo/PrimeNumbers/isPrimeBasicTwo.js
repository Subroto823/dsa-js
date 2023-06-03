/*
 * a little optimized
 * Time Complexity O(n/2)
 */

const isPrime = (number) => {
    if(number < 2) return false;

    for(let i = 2; i <= Math.floor(number/2); i++) {
        if(number % i === 0 ) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(2504987));
console.log(isPrime(15));