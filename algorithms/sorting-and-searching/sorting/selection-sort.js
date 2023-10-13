/**
 * Selection Sort
 * Time Complexity: O(n^2)
 *
 * - Divides the array into sorted and unsorted parts.
 * - Repeatedly selects the minimum element from the unsorted part and moves it to the end of the sorted part.
 *
 */

const { swap } = require("../../../__helpers/swap");

var selectionSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            swap(arr, i, minIndex);
        }
    }
}

let arr = [3, 1, 8, 7, 5, 9, 12, 10, 18, 15, 17];
selectionSort(arr);
console.log(arr);


/**
 * Selection Sort is an unstable sorting algorithm because it does not guarantee the preservation of the original order of equal elements during sorting.
 * To make Selection Sort stable, Instead of swapping elements directly, you can perform an insertion-like operation to ensure that the original order of equal elements is preserved
 * 
 */

var selectionSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        let minValue = arr[minIndex];
        while (minIndex > i) {
            arr[minIndex] = arr[--minIndex];
        }
        arr[i] = minValue;
    }
}

arr = [3, 1, 8, 7, 5, 9, 12, 10, 18, 15, 17];
selectionSort(arr);
console.log(arr);