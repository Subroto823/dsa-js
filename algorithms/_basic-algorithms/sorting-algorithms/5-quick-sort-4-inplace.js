/**
 # Quick Sort (with 3-way partitioning)
 * Inplace implementation - without taking extra space
 * 
 * */

const { swap } = require("./_helper-functions/swap");
const { randomArray } = require("./_helper-functions/random-numbers-array");

function quickSort(nums, left = 0, right = nums.length - 1) {
    if (right <= left) return;
    let lo = left, hi = right;
    let pivot = nums[left];
    let i = left + 1;

    while (i <= hi) {
        if (nums[i] < pivot) swap(nums, lo++, i++);
        else if (nums[i] > pivot) swap(nums, i, hi--);
        else i++;
    }

    quickSort(nums, left, lo - 1);
    quickSort(nums, hi + 1, right);
}

let nums = randomArray(20, 40);

quickSort(nums);
console.log(nums);