/**
 # Quick Sort
 * Inplace implementation - without taking extra space
 * 
 * */
const { swap } = require("./_helper-functions/swap");
const { randomArray } = require("./_helper-functions/random-numbers-array");

function quickSort(nums, left = 0, right = nums.length - 1) {
    if (left >= right) return;

    let pivot = left;
    for(let i = left + 1; i <= right; i++) {
        if(nums[i] < nums[left]) {
            swap(nums, ++pivot, i);
        }
    }
    
    swap(nums, left, pivot);
    quickSort(nums, left, pivot - 1);
    quickSort(nums, pivot + 1, right);
}

let nums = randomArray(20, 40);

quickSort(nums);
console.log(nums);