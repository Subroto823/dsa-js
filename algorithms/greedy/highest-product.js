/**
Problem Discussion

Given an array of N integers. 
Find the highest product by multiplying 3 elements.

Constraints
    * 3 <= N <= 5e5

Example:
    Input: [1, 2, 3, 4] 
    Output: 2 * 3 * 4 = 24

    Input: [0, -1, 10, 7, 5] 
    Output: 10 * 7 * 5 = 350

    Input: [-5, -2, -1, 0, 0, 1, 1, 5]
    Output: -5 * -2 * 5 = 50
 */

const maxp3 = function (A) {
    A.sort((a, b) => a - b);

    let n = A.length;

    const hi3 = A[n - 1] * A[n - 2] * A[n - 3];
    const lo2hi1 = A[0] * A[1] * A[n - 1];

    return Math.max(hi3, lo2hi1);
}


numbers = [1, 2, 3, 4];
console.log(maxp3(numbers));

numbers = [0, -1, 10, 7, 5];
console.log(maxp3(numbers));

numbers = [-5, -2, -1, 0, 0, 1, 1, 5];
console.log(maxp3(numbers));