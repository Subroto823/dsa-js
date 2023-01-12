/*
 * Time Complexity O(n)
 */

const isPrimeBasic = (number) => {
    if(number < 2) return false;

    for(let i = 2; i <= number; i++) {
        if(number % i === 0 ) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(2504987));
console.log(isPrime(15));

