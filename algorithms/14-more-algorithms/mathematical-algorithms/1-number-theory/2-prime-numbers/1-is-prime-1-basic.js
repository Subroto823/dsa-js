/*
# Prime Number
    # A prime number is a positive integer greater than 1 that has no positive divisors other than 1 and itself. In other words, a prime number is only divisible by 1 and itself, and it has no other factors. 

    Time Complexity O(n)
*/

const isPrime = (number) => {
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

