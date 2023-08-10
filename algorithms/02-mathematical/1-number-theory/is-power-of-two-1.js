/*
 # Is Power Of Two

    2^0 = 1
    2^1 = 2
    2^2 = 4
    2^3 = 8 ... and so on

    # Time Complexity O(O(logn))
    # By using bitwise operator, we can solve the problem in a Constant complexity of 1
 */

const isPowerOfTwo = (number) => {
    if(number < 2 || number % 2 !== 0) return false;
    
    while(number > 1) {
        if(number % 2 !== 0) return false;
        number = number / 2;
    }
    return true;
}

console.log(isPowerOfTwo(8));