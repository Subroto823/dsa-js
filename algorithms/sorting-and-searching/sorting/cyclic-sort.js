/**
Cyclic Sort

Cyclic sort is a simple and intuitive sorting algorithm that is particularly useful when you have an array containing a range of distinct integers. 
It works by cycling or swapping elements to their correct positions within the array.

Algorithm:

1. Iterate through the array elements from index 0.
2. For each element, check if it's in the correct position.
3. If the element is not in the correct position, swap it with the element at its correct position.
4. Repeat the process until all elements are in their correct positions.

Time Complexity: O(n)

 */

const { swap } = require('../../../__helpers/swap')

const cyclicSort = function (nums) {
    for (let i = 0; i < nums.length;) {
        if (nums[i] !== nums[nums[i] - 1]) {
            swap(nums, i, nums[i] - 1)
        } else {
            i++;
        }
    }
}


let nums = [3, 5, 2, 1, 4];
cyclicSort(nums);
console.log(nums);