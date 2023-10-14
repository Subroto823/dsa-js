/**
 * Quick Sort
 * 
 * Time Complexity: Best case O(n*log(n)), Average case O(n*log(n)), Worst case O(n^2)
 * Space Complexity: O(n)
 *
 * - Selects a pivot element from the array.
 * - Partitions the array into two subarrays: elements less than the pivot and elements greater than the pivot.
 * - Recursively sorts the subarrays before and after the pivot until the entire array is sorted.
 * 
 * Although it has a worst-case complexity of O(n^2), the average-case performance is what makes this algorithm efficient.
 * 
 */

const { swap } = require("../../../__helpers/swap");

const quickSort = function (arr) {
    if (arr.length < 2) return arr;

    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}


/**
 * Quick Sort
 * Inplace implementation (without taking extra space)
 * 
 */

const inQuickSort = function (arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivot = partition(arr, left, right);
        inQuickSort(arr, left, pivot - 1);
        inQuickSort(arr, pivot + 1, right);
    }

    return arr;
}

const partition = function (arr, l, r) {
    const pivot = arr[r];
    let i = l;

    for (let j = l; j < r; j++) {
        if (arr[j] < pivot) {
            swap(arr, i++, j);
        }
    }

    swap(arr, i, r);
    return i;
}


function main() {
    let arr = [3, 1, 8, 7, 5, 9, 12, 10, 18, 15, 17];
    let sortedArray = quickSort(arr);
    console.log(sortedArray);

    arr = [3, 1, 8, 7, 5, 9, 12, 10, 18, 15, 17];
    inQuickSort(arr);
    console.log(arr);
}

if (require.main === module) main();


module.exports = {
    quickSort,
    inQuickSort
}