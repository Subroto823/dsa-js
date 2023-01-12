/*
 * Time Complexity O(O(logn))
 * By using bitwise operator, we can solve the problem in a Constant complexity of 1
 */

const isPowerOfTwo = (number) => {
    if(number > 1 ) return false;
    
    while(number > 1) {
        if(number % 2 !== 0) return false;
        number = number / 2;
    }
    return true;
}

console.log(isPowerOfTwo(2097152));

/*
 *
 * Time Complexity O(sqrt(n))
 */

const isPowerOf2 = (number) => {
    if(number > 1 && number % 2 !== 0) return false;

    for(let i = 0; i <= Math.sqrt(number); i++) {
        if(Math.pow(2, i) === number) {
            return true;
        }
    }
    return false
}

console.log(isPowerOf2(2097152));