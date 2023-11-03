/*
Problem Statement:

You are given a non-negative integer x. Find the square root of x and return it as an integer, rounded down to the nearest integer. 
If the square root is not an integer, return the integer part.

Your task is to find the square root without using any built-in exponent function or operator. 
*/


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 1;
    let r = x;

    while(l <= r) {
        let mid = l + ((r - l) >>2);

        if(mid * mid <= x) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    
    return r;
};


console.log(mySqrt(5));
console.log(mySqrt(16));
console.log(mySqrt(27));