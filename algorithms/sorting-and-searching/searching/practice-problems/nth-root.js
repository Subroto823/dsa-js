/*
Problem Statement:

You are given a non-negative integer x and an integer n. Your task is to find an approximation of the n-th root of x within a specified epsilon value. 
In other words, you need to find a number y such that y^n is close to x within a given epsilon range.

Implement a function to find this approximation of the n-th root.
*/

var nthRoot = function (x, n, epsilon = 1e-9) {
    if (x === 0) {
        return 0.0;
    }

    let l = 0;
    let r = Math.max(1, x);
    let mid, midPower;

    while (r - l > epsilon) {
        mid = l + ((r - l) / 2);
        midPower = Math.pow(mid, n);

        if (Math.abs(midPower - x) < epsilon) {
            return mid;
        }

        if (midPower < x) {
            l = mid;
        } else {
            r = mid;
        }
    }

    return mid;
}

console.log(nthRoot(4, 2));
console.log(nthRoot(8, 3));
console.log(nthRoot(27, 4)); 