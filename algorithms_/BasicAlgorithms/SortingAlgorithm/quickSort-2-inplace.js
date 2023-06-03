/**
 * @Quick Sort
 * @inplace implementation - without taking extra space
 * 
 * */

const { swap } = require("./helper/swap");
const { randomArray } = require("./helper/randomNumbers");

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left;

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i, right);
    return i;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivot = partition(arr, left, right);
        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);
    }
    return arr;
}

let nums = randomArray(20, 40);

quickSort(nums);
console.log(nums);