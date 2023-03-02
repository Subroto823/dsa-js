/**
 * @Quick Sort
 * @inplace implementation - without taking extra space
*/

const { swap } = require("./swap");

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

// let arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
let arr = [3, 4, 2, 1, 5];

const res = quickSort(arr);
console.log(res);