/*
Problem Discussion

Given an array A of a random permutation of numbers from 1 to N. Given B, the number of swaps in A that we can make. Find the largest permutation possible. 


Example:
    Input: A = [1, 3, 2], B = 1
    Output: [3, 1, 2]

    Input: A = [1, 2, 3, 4], B = 1
    Output: [4, 2, 3, 1]

    Input : A = [3, 2, 4, 1, 5], B = 3
    Output: [5, 4, 3, 1, 2]

Constraints:
    *  1 <= N <= 1e6
    * 1 <= B <= 1e9
*/
const { swap } = require('../../helpers/swap.js');

function solve(A, B) {
    const indexMap = new Map();

    A.forEach((element, i) => {
        indexMap.set(element, i);
    });

    let n = A.length,
        max = n,
        i = 0;

    while (B && i < n) {
        let j = indexMap.get(max);

        if (i !== j) {
            swap(A, i, j);
            B--;

            let tmp = indexMap.get(A[i]);
            indexMap.set(A[i], indexMap.get(A[j]));
            indexMap.set(A[j], tmp);
        }
        i++;
        max--;
    }
    return A;
}

let A = [3, 2, 4, 1, 5], B = 3;
console.log(solve(A, B));

Input: A = [1, 2, 3, 4], B = 1
console.log(solve(A, B));

Input: A = [1, 3, 2], B = 1
console.log(solve(A, B));


