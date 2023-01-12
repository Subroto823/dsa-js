/*
 * using bitwise operator
 * Time Complexity O(1)
 * 
 */

const isPowerOfTwoBitwise = (number) => {
    if(number < 1) {
        return false;
    }
    return (number & (number - 1)) === 0;
}

console.log(isPowerOfTwoBitwise(2097153));
console.log(isPowerOfTwoBitwise(2097152));
