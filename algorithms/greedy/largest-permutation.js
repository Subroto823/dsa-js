/*
Problem Discussion

Given an array nums of a random permutation of numbers from 1 to N. Given k, the number of swaps in A that we can make. Find the largest permutation possible. 


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
const { swap } = require('../../__helpers/swap');

const largestPermutation = function (nums, k) {
    const numsIndex = new Map();

    nums.forEach((num, i) => {
        numsIndex.set(num, i);
    });

    const n = nums.length;
    let max = n;

    for (let i = 0; i < n && k; i++) {
        let j = numsIndex.get(max);

        if (i !== j) {
            swap(nums, i, j);
            numsIndex.set(max, i);
            numsIndex.set(nums[j], j);
            k--;
        }

        max--;
    }

    return nums;
}

let nums = [3, 2, 4, 1, 5], k = 3;
console.log(largestPermutation(nums, k));

nums = [1, 2, 3, 4], k = 1
console.log(largestPermutation(nums, k));

nums = [1, 3, 2], k = 1
console.log(largestPermutation(nums, k));


