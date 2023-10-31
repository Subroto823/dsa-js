/*
 # Is Power Of Two 
    # Using bitwise operator
    # Time Complexity O(1)
*/

const isPowerOfTwo = (number) => {
    if(number < 2) return false;
    return (number & (number - 1)) === 0;
}

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(28));


/*
isPowerOfTwo(4) = 4 & (4 - 1)
                = 4 & 3
                = 1000 & 0100 (in binary)
                = 0 
*/
